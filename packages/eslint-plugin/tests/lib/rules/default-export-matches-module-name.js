/**
 * @file Enforces default exports are internally named the same as their module (file) name.
 * @author Cameron Welter
 */
'use strict'

/*
 * ------------------------------------------------------------------------------
 * Requirements
 * ------------------------------------------------------------------------------
 */

const rule = require('../../../lib/rules/default-export-matches-module-name')
const RuleTester = require('../../../util/RuleTester')

const externalNotMatchModuleNameError = (exportName, moduleName) => {
  return {
    messageId: 'externalNotMatchModuleName',
    data: {
      exportName,
      moduleName,
    },
  }
}

const notMatchModuleNameError = (exportName, moduleName) => {
  return {
    messageId: 'notMatchModuleName',
    data: {
      exportName,
      moduleName,
    },
  }
}

/*
 * ------------------------------------------------------------------------------
 * Tests
 * ------------------------------------------------------------------------------
 */

const ruleTester = new RuleTester()
ruleTester.run('default-export-matches-module-name', rule, {

  valid: [
    {
      filename: './Foo.js',
      code: 'export default class Foo { }',
    },
    {
      filename: './Foo.js',
      code: `const Foo = {};
        export default Foo;`,
    },
    {
      filename: './Foo.js',
      code: `const Foo = {};
        export { Foo as default };`,
    },
    {
      filename: './Foo/index.js',
      code: 'export { Foo as default } from \'./Foo\'',
    },
    {
      filename: './Foo/index.js',
      code: 'export { default } from \'./Foo\'',
    },
    {
      filename: './Foo/index.js',
      code: 'export default from \'./Foo\'',
    },
    {
      filename: './Foo',
      options: [{ caseInsensitive: true }],
      code: 'export default function foo () {}',
    },
  ],

  invalid: [
    {
      filename: './Bar.js',
      code: 'export default class Foo { }',
      errors: [
        notMatchModuleNameError('Foo', 'Bar'),
      ],
    },
    {
      filename: './Bar.js',
      code: 'const Foo = {}; export default Foo',
      errors: [
        notMatchModuleNameError('Foo', 'Bar'),
      ],
    },
    {
      filename: './Bar/index.js',
      code: 'export { default } from \'./Foo\'',
      errors: [
        externalNotMatchModuleNameError('Foo', 'Bar'),
      ],
    },
    {
      filename: './Bar/index.js',
      code: 'export default from \'./Foo\'',
      errors: [
        externalNotMatchModuleNameError('Foo', 'Bar'),
      ],
    },
  ],
})
