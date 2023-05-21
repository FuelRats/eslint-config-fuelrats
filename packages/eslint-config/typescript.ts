import { extListTS, sArg } from './_internal'
import { ruleset } from './util'

export = {
  extends: [
    './purejs',
    './plugins/typescript',
    './plugins/ext-typescript',
    './plugins/jsdoc-ts',
  ].map(sArg(require.resolve)),
  settings: {
    'import/resolver': {
      node: { extensions: extListTS },
    },
    'import/extensions': extListTS,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  rules: ruleset.off(
    'constructor-super',
    'getter-return',
    'no-const-assign',
    'no-dupe-args',
    'no-dupe-class-members',
    'no-dupe-keys',
    'no-func-assign',
    'no-new-symbol',
    'no-obj-calls',
    'no-redeclare',
    'no-this-before-super',
    'no-undef',
    'no-unreachable',
    'no-unsafe-negation',
    'valid-typeof',
    'import/named',
    'import/no-unresolved',
  ),
}
