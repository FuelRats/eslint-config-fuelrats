/***************************************************************************\
  All the credit and love to AirBnB for an amazing config project structure
  https://github.com/airbnb/javascript
\***************************************************************************/

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    './rules/plugin-react',
    './rules/plugin-react-jsx',
    './rules/plugin-react-hooks',
    './rules/plugin-jsx-a11y',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
