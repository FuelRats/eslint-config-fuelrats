/* eslint-disable no-param-reassign -- This just makes things easier. fite me. */

const { isArray } = Array;

/**
 * An ESlint rule config array. Our configs only allow string error levels.
 * @typedef {[string, ...any[]]} RuleConfig
 */

/**
 * @param {string} message
 */
function throwError (message) {
  throw new Error(message);
}

/**
 * @param {any} value
 * @returns {value is object}
 */
function isObject (value) {
  return typeof value === 'object' && value !== null && !isArray(value);
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isNullish (value) {
  return value === null || typeof value === 'undefined';
}

/**
 * @param {any[]} tValue
 * @returns {any[]}
 */
function concatOpt (tValue) {
  return (sValue) => {
    if (isArray(sValue)) {
      return sValue.concat(tValue);
    }
    return tValue;
  };
}

/**
 * @param {...string} rules
 * @returns {object}
 */
function disable (...rules) {
  return rules.reduce((acc, rule) => {
    acc[rule] = 0;
    return acc;
  }, {});
}

/**
 * @param {object} source
 * @param {object} target
 * @returns {object}
 */
function mergeProps (source, target) {
  Object.entries(target).forEach(([key, tVal]) => {
    const mergeResult = deepMerge(source[key], tVal);
    if (typeof mergeResult !== 'undefined') {
      if (mergeResult === null) {
        delete source[key];
      } else {
        source[key] = mergeResult;
      }
    }
  });

  return source;
}

/**
 * @param {any} source
 * @param {any} target
 * @returns {any}
 */
function deepMerge (source, target) {
  if (isNullish(target) === true) {
    return target; // let the parent function decide what to do with non-values
  }

  if (typeof target === 'function') {
    return target(source);
  }

  if (isObject(source) && isObject(target)) {
    return mergeProps(source, target);
  }

  return target;
}

/**
 * Extends the provided rule through concatenation, adding the provided arguments to the rule array.
 * This rule is mainly for rules like `no-restricted-globals` with an arbitrary list of config items
 *
 * @param {RuleConfig} rule
 * @param {...any} newArgs
 * @returns {RuleConfig}
 */
function concatRule (rule, ...newArgs) {
  return rule.concat(newArgs);
}

/**
 * Retrieves the provided rule and merges it's config with the provided config.
 *
 * Error level is ignored in this merge, and newArgs should begin with the first rule option.
 *
 * To change error level, wrap with {@link warn} or {@link error}.
 *
 * use `undefined` to inherit the current setting, `null` to remove the setting entirely.
 * Arrays are not merged, only replaced. to merge an array, use the {@link concatOpt} helper
 *
 * @param {RuleConfig} rule
 * @param {...any} newArgs
 * @returns {RuleConfig}
 */
function __extendRule (rule, ...newArgs) {
  const newRule = [...rule];

  if (newArgs.length) {
    const [, ...ruleArgs] = rule;

    newArgs.forEach((arg, idx) => {
      const mergeResult = deepMerge(ruleArgs[idx], arg);
      if (isNullish(mergeResult) === false) {
        newRule[idx + 1] = mergeResult;
      }
    });
  }

  return newRule;
}

/**
 * Sets the error level of a given rule to the given level
 * @param {RuleConfig} rule
 * @param {'error'|'warn'|'off'} level
 * @returns {RuleConfig}
 */
function __setLevel (rule, level) {
  rule[0] = level;
  return rule;
}

/* eslint-enable no-param-reassign */


module.exports = {
  __extendRule,
  __setLevel,
  concatOpt,
  concatRule,
  deepMerge,
  disable,
  isObject,
  mergeProps,
  throwError,
};

