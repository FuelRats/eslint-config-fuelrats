const {
  RuleConfig,
  concatOpt,
  concatRule,
  disable,
  extendRule,
  __setLevel,
} = require('./helpers');


/**
 * Provides a modified rule config with an error level of 'error'. Accepts a rule name or rule config array.
 * @param {RuleConfig} rule
 * @returns {RuleConfig}
 */
function error (rule) {
  return __setLevel(rule, 'error');
}


/**
 * Provides a modified rule config with an error level of 'warn'. Accepts a rule name or rule config array.
 * @param {RuleConfig} rule
 * @returns {RuleConfig}
 */
function warn (rule) {
  return __setLevel(rule, 'warn');
}


const util = {
  concatOpt,
  concatRule,
  disable,
  error,
  extendRule,
  warn,
};


module.exports = util;
