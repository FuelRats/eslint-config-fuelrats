// IMPORTANT: All changes to this file should be reflected on `eslint-config/util/index.js` as well!
const {
  RuleConfig,
  concatOpt,
  disable,
  __concatRule,
  __extendRule,
  __setLevel,
} = require('@fuelrats/eslint-config/util/helpers')
const rules = require('../rules')


/**
 * Provides a modified rule config with an error level of 'error'. Accepts a rule name or rule config array.
 * @param {string|RuleConfig} rule
 * @returns {RuleConfig}
 */
function error (rule) {
  return __setLevel(rules, 'error', rule)
}

/**
 * Provides a modified rule config with an error level of 'warn'. Accepts a rule name or rule config array.
 * @param {string|RuleConfig} rule
 * @returns {RuleConfig}
 */
function warn (rule) {
  return __setLevel(rules, 'warn', rule)
}


/**
 * Extends the provided rule through concatenation, adding the provided arguments to the rule array.
 * This rule is mainly for rules like `no-restricted-globals` with an arbitrary list of config items
 * @param {string|RuleConfig} rule
 * @param {...any} newArgs
 * @returns {RuleConfig}
 */
function concatRule (rule, ...newArgs) {
  return __concatRule(rules, rule, newArgs)
}

/**
 * Retrieves the provided rule and merges it's config with the provided config.
 *
 * Error level is ignored in this merge, and newArgs should begin with the first rule option.
 *
 * To change error level, wrap with {@link warn} or {@link error}.
 *
 * @param {string|RuleConfig} rule
 * @param {...any} newArgs
 * @returns {RuleConfig}
 */
function extendRule (rule, ...newArgs) {
  return __extendRule(rules, rule, newArgs)
}


const util = {
  concatOpt,
  concatRule,
  disable,
  error,
  extendRule,
  warn,
}


module.exports = util
