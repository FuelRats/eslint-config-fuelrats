/***************************************************************************\
  All the credit and love to AirBnB for an amazing config project structure
  https://github.com/airbnb/javascript
\***************************************************************************/

module.exports = {
  env: {
    node: true,
  },
  extends: './develop.js',
  rules: {
    'no-magic-numbers': ['off'], // since defining a bunch of consts for lint rules is cumbersome
    'quote-props': ['error', 'consistent-as-needed'], // since the majority of rules are in quotes with little outlyers;
    'max-lines': ['off'], // We're not interested in breaking up rule files
  }
}
