# Config Utilities

`@fuelrats/eslint-config` comes pre-packed with some helpful composition utilities to extend the existing ruleset. If you're looking to change specific behavior of a lint rule, we encourage using these tools for granular control over deviations from our config.

You may import them like so:

```js
// .eslintrc.js

const util = require('@fuelrats/eslint-config/util')

// or

const util = require('@fuelrats/eslint-config-react/util')
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Choose the right package](#choose-the-right-package)
- [Functions](#functions)
  - [`util.extendRule(rule[, ...args])`](#utilextendrulerule-args)
    - [Type-Specific Sehavior](#type-specific-sehavior)
  - [`util.concatRule(rule[, ...newArgs])`](#utilconcatrulerule-newargs)
  - [`util.concatOpt(values)`](#utilconcatoptvalues)
  - [`warn(rule)` and `error(rule)`](#warnrule-and-errorrule)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Choose the right package

Both `@fuelrats/eslint-config` and `@fuelrats/eslint-config-react` provide these utilities. The only difference between them is that `@fuelrats/eslint-config-react` includes knowledge of react-specific rules, while the base package does not.

**If using `@fuelrats/eslint-config-react`, import your utilties from `@fuelrats/eslint-config-react`. Use `@fuelrats/eslint-config`, otherwise.**

## Functions

### `util.extendRule(rule[, ...args])`

- `rule` <`string | RuleConfig`> - May be the name of a rule defined by the config, or a manually defined rule config array.
- `args` <`...any[]`> - Rule option overrides. Objects will be deep merged.

Retrieves the provided rule and merges it with the provided arguments. Some special behavior occurs with specific values encountered. See the section below for more info.

This is considered an advanced tool for providing granular control over config changes, and assures your own rule options stay up-to-date with the base config.

**Note:** Error level is ignored through this function. Arguments should begin with the rule's first option. See examples for clarification.

```js
module.exports = {
  rules: {
    // Remove all magic number exceptions...
    // Default:  ['error', { ignore: [...], enforceConst: true, ignoreDefaultValues: true, }]
    // Produces: ['error', { ignore: [], enforceConst: true, ignoreDefaultValues: true, }]
    'no-magic-numbers': util.extendRule('no-magic-numbers', { ignore: [] }),

    // Recognize default values as magic numbers...
    // Default:  ['error', { ignore: [...], enforceConst: true, ignoreDefaultValues: true, }]
    // Produces: ['error', { ignore: [...], enforceConst: true, ignoreDefaultValues: false, }]
    'no-magic-numbers': util.extendRule('no-magic-numbers', { ignoreDefaultValues: false, }),

    // Enforce AssignmentExpression object destrucutring
    // Default:  ['error', { ..., AssignmentExpression: { array: false, object: false } }, { ... }]
    // Produces: ['error', { ..., AssignmentExpression: { array: false, object: true } }, { ... }]
    'prefer-destructuring': util.extendRule('prefer-destructuring', { AssignmentExpression: { object: true } })

    // Advanced (yet contrived) example of using a value resolver to remove all values that start with 'C/c' from this config array.
    'no-param-reassign': util.extendRule('no-param-reassign', {
      ignorePropertyModificationsFor: (source) => {
        return source.filter((sVal) => sVal.toLowerCase().startsWith('c'))
      }
    })
  }
}
```

#### Type-Specific Sehavior

- `Objects` - Objects are recursively deep merged with no depth limit.
- `Arrays` - Arrays are treated like normal non-object values and overridden. To concatenate instead of overwrite, use `util.concatOpt`.
- `Functions` - Any function detected within the object tree will be treated as a custom value resolver. It will be passed the current value at it's location in the source rule config.
  - See `util.concatOpt()` for an example.
- `undefined` - Using `undefined` _anywhere_ will result in the value being ignored. `undefined`, in effect, tells `extendRule()` that you wish to use the given option as-configured by this config.
- `null` - Using `null` is generally not recommended, but it has some utility.
  - **On the top level** It is ignored just like `undefined`
  - **Within _any_ object** the given value will be deleted.

### `util.concatRule(rule[, ...newArgs])`

- `rule` <`string | RuleConfig`> - May be the name of a rule defined by the config, or a manually defined rule config array.
- `newArgs` <`...any[]`> - Config entries to add to the existing rule array.
- **Returns:** `RuleConfig`

Extends a rule with new properties. This is primarily for rules with an arbitrary number of arguments, such as `no-restricted-globals`.

```js
module.exports = {
  rules: {
    'no-restricted-globals': util.extendRule('no-restricted-globals', {
      "name": "event",
      "message": "Use local parameter instead."
    }),
  }
}
```

### `util.concatOpt(values)`

- `values` <`any[]`> - Values to concatenate to the array value at a specific location within a `RuleConfig`
- **Returns:** `(sourceValues: any[]) => any[]`

A special utility to be used with `util.extendRule()`. This utility provides a value resolver function that adds values to an array within a config object.

This function may be used anywhere within an object given to `util.extendRule()`.

```js
module.exports = {
  rules: {
    // Produces ['error', { ...otherOptions, ignore: [...otherNumbers, 50] } ]
    'no-magic-numbers': util.extendRule('no-magic-numbers', {
      ignore: util.concatOpt([50])
    }),
  }
}
```

### `warn(rule)` and `error(rule)`

- `rule` <`string | RuleConfig`> - May be the name of a rule defined by the config, or a manually defined rule config array.

Changes the error level for the given rule to `warn` or `error` respectively.

```js
module.exports = {
  rules: {
    'no-trailing-spaces': warn('no-trailing-spaces'),
  }
}
```
