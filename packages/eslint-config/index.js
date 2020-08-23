/***************************************************************************\
  All the credit and love to AirBnB for an amazing config project structure
  https://github.com/airbnb/javascript
\***************************************************************************/

module.exports = {
  extends: [
    './purejs',
    './plugins/babel',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
}
