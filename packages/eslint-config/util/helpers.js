/* eslint-disable no-param-reassign -- This just makes things easier. fite me. */

const { isArray } = Array

/**
 * An ESlint rule config array. Our configs only allow string error levels.
 * @typedef {[string, ...any[]]} RuleConfig
 */

/**
 * @param {string} message
 */
function throwError (message) {
  throw new Error(message)
}

/**
 * @param {any} value
 * @returns {value is Record<string, any>}
 */
function isObject (value) {
  return typeof value === 'object' && value !== null && !isArray(value)
}

/**
 * @param {Record<string, any>} source
 * @param {Record<string, any>} target
 * @returns {Record<string, any>}
 */
function mergeProps (source, target) {
  Object.entries(target).forEach(([key, tVal]) => {
    source[key] = deepMerge(source[key], tVal)
  })

  return source
}

/**
 * @param {any} source
 * @param {any} target
 * @returns {any}
 */
function deepMerge (source, target) {
  if (typeof target === 'undefined') {
    return source
  }

  if (isObject(source) && isObject(target)) {
    return mergeProps(source, target)
  }

  return target
}


/**
 * @param {object} rules
 * @param {string|RuleConfig} rule
 * @returns {RuleConfig}
 */
function __getRule (rules, rule) {
  if (isArray(rule)) {
    return rule
  }

  return rules[rule] ?? throwError(
    `Attempted to reference an unknown rule: '${rule}'. Please provide a valid rule name or config array.`,
  )
}

/**
 * @param {object} rules
 * @param {string|RuleConfig} rule
 * @param {any[]} newArgs
 * @returns {RuleConfig}
 */
function __mergeRule (rules, rule, newArgs = []) {
  const [rLevel, ...ruleArgs] = __getRule(rules, rule)

  const newRule = [rLevel, ...ruleArgs]

  newArgs.forEach((arg, idx) => {
    newRule[idx + 1] = deepMerge(ruleArgs[idx], arg)
  })

  return newRule
}

/**
 * @param {object} rules
 * @param {string|RuleConfig} rule
 * @param {any[]} newArgs
 * @returns {RuleConfig}
 */
function __extendRule (rules, rule, newArgs = []) {
  return __getRule(rules, rule).concat(newArgs)
}

/**
 * Sets the error level of a given rule to 'warn'
 * @param {object} rules
 * @param {'error'|'warn'|'off'} level
 * @param {string|RuleConfig} rule
 * @returns {RuleConfig}
 */
function __setLevel (rules, level, rule) {
  rule = __getRule(rules, rule)
  rule[0] = level
  return rule
}

module.exports = {
  throwError,
  isObject,
  mergeProps,
  deepMerge,
  __getRule,
  __mergeRule,
  __extendRule,
  __setLevel,
}
