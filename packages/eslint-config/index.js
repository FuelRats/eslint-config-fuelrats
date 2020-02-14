/***************************************************************************\
  All the credit and love to AirBnB for an amazing config project structure
  https://github.com/airbnb/javascript
\***************************************************************************/

module.exports = {
  extends: [
    './purejs',
    './rules/plugin-babel',
  ].map(require.resolve),
  parser: 'babel-eslint',
}
