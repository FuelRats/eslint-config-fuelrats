# @fuelrats/eslint-config-react Changelog

### Unreleased

### 2.3.0

#### Changes

* Remove deprecated rule `jsx-a11y/accessible-emoji`. ([See discussion](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/627))
* Add React 17 as compatible version.
* Update minimum ESLint version to `v7.14`.

### 2.2.0

#### Additions

* Enable `jsx-a11y/autocomplete-valid`

#### Changes

* set `parser` and `parserOptions` from main package so `eslint-config-react` can be used standalone.
* Recognize all hooks that follow the pattern `^use.+(Callback|Effect)$` as hooks with dependencies.
* Enable `skipUndeclared` option for `react/prop-types`. This makes documenting props only required if `propTypes` is declared on the component.
* Disable `require-default-props`.
  * There are some limitations with this rule (forwardRefs) which make it problematic at times.
  * defaultProps is being phased out in favor of destructured default values in function components making this rule have lesser value than before.
* Replace `babel-eslint` with `@babel/eslint-parser`.
* Restructure ruleset directories so there's distinction between what is core to the config and what is considered "optional" or "addons"

#### Fixed

* resolved an issue where `indent` and `react/jsx-indent` conflict.

### 2.1.0

#### Changes

* Disable `react/no-did-mount-set-state` due to it's lack of exceptions for async data handling.
* Disable `jsx-a11y/no-onchange` due to some false positives we were seeing.

#### Fixed

* Remove `react-dom` as a peer dependency.

### 2.0.0

* Initial release intended for general consumption

### 1.x

Original version (which should no longer be used)
