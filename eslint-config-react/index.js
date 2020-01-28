/***************************************************************************\
  All the credit and love to AirBnB for an amazing config project structure
  https://github.com/airbnb/javascript
\***************************************************************************/

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    '@fuelrats/eslint-config',
    './rules/plugin-react',
    './rules/plugin-react-jsx',
    './rules/plugin-react-hooks',
    './rules/plugin-jsx-a11y',
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
