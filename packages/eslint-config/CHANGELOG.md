# @fuelrats/eslint-config Changelog


### Unreleased

#### Additions
* Warn when a lint rule is being disabled that doesn't need to be.


#### Changes
* Better and more consistent restricted syntax messages.
* Disallow explicit null checks via `no-restricted syntax` instead of abusing the combination of `eqeqeq`'s null option and `no-eq-null`


### 2.1.0

#### Changes
* re-enable `import/no-cycle` due to the problems cyclic dependencies cause in most environments.
* enable `no-undef`'s `typeof` rule. If you are `typeof` checking a global unknown to eslint, you should define it!





### 2.0.0

* Initial release intended for general consumption





### 1.x

Original version (which should no longer be used)
