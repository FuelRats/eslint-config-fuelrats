# @fuelrats/eslint-config

* Base ESLint ruleset with `babel-eslin`t as the primary parser. Generally intended for node.js backend projects.
    * Assumes an ES2018 class-based environment with babel transforms.
    * Includes [`eslint-plugin-import`][eslint-plugin-import] for additional ESModule linting.
    * Includes [`eslint-plugin-babel`][eslint-plugin-babel] for providing core rule compatibility for common babel plugins.
    * Includes [`eslint-plugin-jsdoc`][eslint-plugin-jsdoc] for JSDoc block linting. If you do not use JSDoc, set `jsdoc/"require-jsdoc": ["off"]` in your `.eslintrc` file.
    * Also includes a `purejs` preset which disables `eslint-plugin-babel`.




## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` aims to help unify style and standards across all major FuelRats projects.





## Setup

### Installation

We recommend the `install-peerdeps` package for automatically adding your peerdeps

#### Via `npm` v5+

```bash
$ npx install-peerdeps -d @fuelrats/eslint-config
```

#### Via `yarn` 1.x

Yarn v1 does not have an included remote script runner. First you must globally install `install-peerdeps`

```bash
$ yarn global add install-peerdeps
```
then run
```bash
$ install-peerdeps -d -Y @fuelrats/eslint-config
```


#### Via `yarn` 2 😎

```bash
$ yarn dlx install-peerdeps -d -Y @fuelrats/eslint-config
```


#### Other Package managers

Refer to your manager docs, or just manually install everything (borrriiiiing). Below is a list of package names you can apply to the manager of your choice.

```bash
eslint babel-eslint eslint-plugin-babel eslint-plugin-import eslint-plugin-jsdoc @fuelrats/eslint-config
```


### Configuration

1. Add the following to your `.eslintrc` file:
```json
"extends": "@fuelrats/eslint-config",
```
2. Setup additional environment options. This config only enables the `"es6"` environment. All other env settings are up to your project.
    * For more information on eslint envrionment settings, visit [the eslint docs][eslint-env]





## Credits
Our code style and this config set was inspired by and derived from the AirBnB javascript style guide.
[Send some love their way 😍🎉🎊][airbnb]





[airbnb]: https://github.com/airbnb/javascript
[eslint-env]: https://eslint.org/docs/user-guide/configuring#specifying-environments
[eslint-plugin-import]: https://www.npmjs.com/package/eslint-plugin-import
[eslint-plugin-babel]: https://www.npmjs.com/package/eslint-plugin-babel
