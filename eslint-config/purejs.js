/***************************************************************************\
  All the credit and love to AirBnB for an amazing config project structure
  https://github.com/airbnb/javascript
\***************************************************************************/

module.exports = {
  env: {
    es6: true,
  },
  extends: [
    './rules/bestpractices',
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/plugin-import',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
}
