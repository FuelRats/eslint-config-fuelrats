// IMPORTANT: All changes to this file should be reflected on `eslint-config/util/index.js` as well!
const rules = require('../rules')
const {
  __getRule,
  __mergeRule,
  __extendRule,
  __setLevel,
} = require('@fuelrats/eslint-config/util/helpers')


/**
 * Retrieves the rule config with the given name from the combined rules list.
 * @param {string|RuleConfig} rule
 * @returns {RuleConfig}
 */
 function getRule (rule) {
  return __getRule(rules, rule)
}

/**
 * Merges two rule configs together, deep merging objects as-encountered
 * Error level cannot be changed using this function. To change severity, wrap in `warn()`
 * @param {string|RuleConfig} rule
 * @param {...any} newArgs
 * @returns {RuleConfig}
 */
function mergeRule (rule, ...newArgs) {
  return __mergeRule(rules, rule, newArgs)
}

/**
 * Extends an existing rule with the new arguments provided.
 * This rule is mainly for rules like `no-restricted-globals` with an arbitrary list of config items
 * @param {string|RuleConfig} rule
 * @param {...any} newArgs
 * @returns {RuleConfig}
 */
function extendRule (rule, ...newArgs) {
  return __extendRule(rules, rule, newArgs)
}

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


const util = {
  error,
  extendRule,
  getRule,
  mergeRule,
  warn,
}


module.exports = util
