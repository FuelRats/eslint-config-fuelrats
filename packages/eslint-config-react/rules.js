/* eslint-disable prefer-object-spread -- Assign is faster, and we also want some form of backwards compat just in case. */

const baseRules = require('@fuelrats/eslint-config/rules')

module.exports = Object.assign(
  {},
  baseRules,
  require('./core/plugin-jsx-a11y').rules,
  require('./core/plugin-react-hooks').rules,
  require('./core/plugin-react-jsx').rules,
  require('./core/plugin-react').rules,
)
