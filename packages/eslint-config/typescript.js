const importExtensionsTs = require('./util/importExtensionsTypescript')

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
      rules: {
        'constructor-super': 'off',
        'getter-return': 'off',
        'no-const-assign': 'off',
        'no-dupe-args': 'off',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'off',
        'no-func-assign': 'off',
        'no-new-symbol': 'off',
        'no-obj-calls': 'off',
        'no-redeclare': 'off',
        'no-this-before-super': 'off',
        'no-undef': 'off',
        'no-unreachable': 'off',
        'no-unsafe-negation': 'off',
        'valid-typeof': 'off',
        'import/named': 'off',
        'import/no-unresolved': 'off',
        'jsdoc/require-param': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-yields': 'off',
      },
    },
  ],
}
