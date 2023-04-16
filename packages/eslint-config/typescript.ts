import { disableRules } from './util'
import { extensionsTS } from './util/constants'
import { sArg } from './util/internal'

export = {
  extends: [
    './purejs',
    './plugins/typescript',
    './plugins/typescript-extensions',
    './plugins/jsdoc-typescript',
  ].map(sArg(require.resolve)),
  settings: {
    'import/resolver': {
      node: { extensions: extensionsTS },
    },
    'import/extensions': extensionsTS,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  rules: disableRules(
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
