/**
 * @file Special rules made for our configs
 * @author Cameron Welter
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const requireIndex = require('requireindex')

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: requireIndex(`${__dirname}/rules`),
  configs: {
    recommended: {
      plugins: ['@fuelrats'],
      rules: {
        '@fuelrats/no-mixed-access-class-members': 2,
        '@fuelrats/default-export-matches-module-name': 1,
      },
    },
  },
}
