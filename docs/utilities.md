# Config Utilities

`@fuelrats/eslint-config` comes pre-packed with some helpful utilities to modify the existing ruleset. You may import them like so:

```js
// .eslintrc.js
const util = require('@fuelrats/eslint-config/util')
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Functions](#functions)
  - [`disableRules(...rules)`](#disablerulesrules)
  - [`warn(rule)` and `error(rule)`](#warnrule-and-errorrule)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Functions

### `disableRules(...rules)`

- `rules` <`string[]`> - A list of rule names to be disabled

Creates a configuration which disables all specified rules. The resulting object can be set as your config's `rules` config, or spread onto it.

```js
module.exports = {
  rules: util.disableRules(
    'no-restricted-syntax',
    'semi',
  ),
}
```

```js
module.exports = {
  rules: {
    /* ... other rules ... */
    ...util.disableRules(
      'no-restricted-syntax',
      'semi',
    ),
  },
}
```

### `warn(rule)` and `error(rule)`

- `rule` <`RuleConfig`> - any existing rule configration imported from these config packages

Changes the error level for the given rule to `warn` or `error` respectively.

```js
module.exports = {
  rules: {
    'no-trailing-spaces': util.warn(rules['no-trailing-spaces']),
  }
}
```
