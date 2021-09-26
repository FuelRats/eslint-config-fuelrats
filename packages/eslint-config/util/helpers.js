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
 * @returns {value is object}
 */
function isObject (value) {
  return typeof value === 'object' && value !== null && !isArray(value)
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isNullish (value) {
  return value === null || typeof value === 'undefined'
}

/**
 * @param {any[]} tValue
 * @returns {any[]}
 */
function concatOpt (tValue) {
  return (sValue) => {
    if (isArray(sValue)) {
      return sValue.concat(tValue)
    }
    return tValue
  }
}

/**
 * @param {object} source
 * @param {object} target
 * @returns {object}
 */
function mergeProps (source, target) {
  Object.entries(target).forEach(([key, tVal]) => {
    const mergeResult = deepMerge(source[key], tVal)
    if (typeof mergeResult !== undefined) {
      if (mergeResult === null) {
        delete source[key]
      } else {
        source[key] = mergeResult
      }
    }
  })

  return source
}

/**
 * @param {any} source
 * @param {any} target
 * @returns {any}
 */
function deepMerge (source, target) {
  if (isNullish(target) === true) {
    return target // let the parent function decide what to do with non-values
  }

  if (typeof target === 'function') {
    return target(source)
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
function __concatRule (rules, rule, newArgs = []) {
  return __getRule(rules, rule).concat(newArgs)
}

/**
 * @param {object} rules
 * @param {string|RuleConfig} rule
 * @param {any[]} newArgs
 * @returns {RuleConfig}
 */
function __extendRule (rules, rule, newArgs = []) {
  rule = __getRule(rules, rule)

  if (newArgs.length) {
    const [, ...ruleArgs] = __getRule(rules, rule)

    newArgs.forEach((arg, idx) => {
      const mergeResult = deepMerge(ruleArgs[idx], arg)
      if (isNullish(mergeResult) === false) {
        rule[idx + 1] = mergeResult
      }
    })
  }

  return rule
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
  __concatRule,
  __extendRule,
  __getRule,
  __setLevel,
  concatOpt,
  deepMerge,
  isObject,
  mergeProps,
  throwError,
}
