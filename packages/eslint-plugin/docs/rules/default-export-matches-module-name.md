# Enforces default exports are consistently named the same as their module (file) name. (default-export-matches-module-name)

Code editor completion and auto-import engines rely on the name of the default export of a module.
To ensure auto-import behaves as expected, default exports should be named the same as, or similar to, their module names.


## Rule Details

Examples of **incorrect** code for this rule:

```js
// src/foo.js

export default function Foo() {} // foo !== Foo

export default function bar() {} // foo !== bar

export default class Bar {} // foo !== Bar

export { default } from './Bar'
```

Examples of **correct** code for this rule:

```js
// src/foo.js

export default function foo() {}

export default class foo {}

const foo = { bar: 'baz' }
export default foo

```

Works with `index.js` files as well

```js
// src/Foo/index.js

export default function Foo() {}

export default class Foo {}

// Doesn't error as the file being imported matches the directory name.
export { default } from './Foo'

import Foo from './Foo'
export default Foo
```


## Options

This rule has an object option, with one option:
* `"caseInsensitive": true` export and module names are compared via case insensitive matching

### caseInsensitive

This rule internally uses a `===` comparison to match the export identifier to the name of the module.

Set `"caseInsensitive"` to `true` if you want this rule to ignore letter casing differences.

Examples of **correct** code for this rule with `"caseInsensitive"` option set to `true`:
```js
// src/Foo.js

/*eslint @fuelrats/default-export-matches-module-name: ["error", {"caseInsensitive": true}]*/

export default function foo() {}
```


## When Not To Use It

If you do not use default exports, ESModules, or auto-import is not of major importance to you, then you may turn this rule off.

## Resources

* [Rule Source](https://github.com/FuelRats/eslint-config-fuelrats/blob/master/packages/eslint-plugin/lib/rules/default-export-matches-module-name.js)
