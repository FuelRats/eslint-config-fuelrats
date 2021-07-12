module.exports = {
  extends: [
    './purejs',
    './plugins/typescript',
    './plugins/typescript-extensions',
  ].map(require.resolve),
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
}
