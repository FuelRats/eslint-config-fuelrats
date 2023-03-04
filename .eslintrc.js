module.exports = {
  env: {
    node: true,
  },
  overrides: [
    {
      files: '**/*.{js,mjs,cjs,jsx}',
      extends: require.resolve('./packages/eslint-config/dist/index.js'),
      rules: {
        'jsdoc/require-jsdoc': ['off'], // since we don't use jsdoc here
        'no-magic-numbers': ['off'], // since defining a bunch of consts for lint rules is cumbersome
        'quote-props': ['error', 'consistent-as-needed'], // since the majority of rules are in quotes with little outliers;
        'max-lines': ['off'], // We're not interested in breaking up large rule files.
      },
      parserOptions: {
        requireConfigFile: false,
        project: './tsconfig.eslint.json',
      },
    },
    {
      files: '**/*.{ts,tsx}',
      extends: require.resolve('./packages/eslint-config/dist/typescript.js'),
      rules: {
        'jsdoc/require-jsdoc': ['off'], // since we don't use jsdoc here
        '@typescript-eslint/no-magic-numbers': ['off'], // since defining a bunch of consts for lint rules is cumbersome
        'quote-props': ['error', 'consistent-as-needed'], // since the majority of rules are in quotes with little outliers;
        'max-lines': ['off'], // We're not interested in breaking up large rule files.
      },
      parserOptions: {
        requireConfigFile: false,
        project: './tsconfig.eslint.json',
      },
    },
  ],
}
