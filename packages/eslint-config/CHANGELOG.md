# @fuelrats/eslint-config Changelog


### Unreleased





### 2.2.0

#### Additions
* Warn when a lint rule is being disabled that doesn't need to be.
* Enable ESLint v7 rules
  * `default-case-last`
  * `no-useless-backreference`
  * `no-promise-executor-return`
  * `no-unreachable-loop`
* Recognize the path alias `~` as an `internal` import in import ordering.


#### Changes
* Better and more consistent restricted syntax messages.
* Disallow explicit null checks via `no-restricted syntax` instead of abusing the combination of `eqeqeq`'s null option and `no-eq-null`
* add `inheritdoc` to certain `jsdoc` rule `exemptedBy` options so it's consistent with the default config
* make `import/order` case insensitive sort.
* Remove all node-specific rules since they are now deprecated.
* Improved settings for import plugin.
* Use `id-denylist` over `id-blacklist`
  * Even though this rule is off we'd rather not have deprecated rule names :D
* Ensure our config is JSON serializable by replacing `Infinity` with `Number.MAX_SAFE_INTEGER`
* Enable `ignoreGlobals` for `camelcase` rule
* update `no-param-reassign` ignored Properties
  * `draftState` can now be shortened to `draft`
  * `event` has been added to allowed property names
* Replace `babel-eslint` and `eslint-plugin-babel` with `@babel/eslint-parser` and `@babel/eslint-plugin` respectively.
* Restructure ruleset directories so there's distinction between what is core to the config and what is considered "optional" or "addons"
* Enable `ignoreDefaultValues` for `no-magic-numbers` rule
* Exempt doc blocks with `@yeilds` from `jsdoc/require-returns`


### 2.1.0

#### Changes
* re-enable `import/no-cycle` due to the problems cyclic dependencies cause in most environments.
* enable `no-undef`'s `typeof` rule. If you are `typeof` checking a global unknown to eslint, you should define it!





### 2.0.0

* Initial release intended for general consumption





### 1.x

Original version (which should no longer be used)
