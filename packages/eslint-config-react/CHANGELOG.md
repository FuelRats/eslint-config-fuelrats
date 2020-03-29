# @fuelrats/eslint-config-react Changelog


## Unreleased

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
