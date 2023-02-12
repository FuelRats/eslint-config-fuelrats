const util = require('./util');
const importExtensionsTs = require('./util/importExtensionsTypescript');

module.exports = {
  extends: [
    './purejs',
    './plugins/typescript',
    './plugins/typescript-extensions',
  ].map(require.resolve),
  settings: {
    'import/resolver': {
      node: { extensions: importExtensionsTs },
    },
    'import/extensions': importExtensionsTs,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: util.disable(
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
        'jsdoc/require-param',
        'jsdoc/require-returns',
        'jsdoc/require-yields',
      ),
    },
  ],
};
