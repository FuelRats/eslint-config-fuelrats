# [@fuelrats/eslint-config][eslint-config-fuelrats]

* Base ESLint ruleset with [`@babel/eslint-parser`][babel-eslint-parser] as the primary parser. Generally intended for node.js backend projects.
    * Assumes an ECMAScript 2020 environment with [`Babel 7`][babel] as the primary transpiler.
    * Includes [`@babel/eslint-plugin`][eslint-plugin-babel] for providing core rule compatibility for common babel plugins.
    * Includes [`eslint-plugin-import`][eslint-plugin-import] for additional ESModule linting.
    * Includes [`eslint-plugin-jsdoc`][eslint-plugin-jsdoc] for JSDoc block linting.
    * Also includes a `purejs` preset which disables [`@babel/eslint-parser`][babel-eslint-parser] and [`@babel/eslint-plugin`][eslint-plugin-babel].





## Note about v2

> v2 Changes a number of aspects of our code style which may lead to time consuming adjustments, and in some cases an outright refactor of your code.
>
> Please see PR [#3][] for a comprehensive list of changes made from `v1.2.5`



## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` aims to help unify style and standards across all major FuelRats projects.





## Setup

### Installation

We recommend the [`install-peerdeps`][install-peerdeps] package for automatically adding the peer dependencies required by this config.

**NOTE:** The commands below assume you are installing to `devDependencies`. If you want to install to your main `dependencies` (not recommended), remove the `-d` flag.

#### Via `npm` v5+

```bash
$ npx install-peerdeps -d @fuelrats/eslint-config
```

#### Via `yarn` 1.x

Yarn v1 does not have an included remote script runner. First you must globally install `install-peerdeps`:

```bash
$ yarn global add install-peerdeps
```

then run:

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
eslint @babel/core @babel/eslint-parser @babel/eslint-plugin eslint-plugin-import eslint-plugin-jsdoc @fuelrats/eslint-config
```


### Configuration

1. Add the following to your `.eslintrc` file:

```json
"extends": "@fuelrats/eslint-config",
```

or, if you don't use [`Babel`][babel]:

```json
"extends": "@fuelrats/eslint-config/purejs",
```

2. Setup additional environment options. This config only enables the `"es6"` environment. All other env settings are up to your project.
    * For more information on eslint envrionment settings, visit [the eslint docs][eslint-env]





## Credits
Our code style and this config set was inspired by and derived from the AirBnB javascript style guide.

[Send some love their way 😍🎉🎊][airbnb]



[#3]: https://github.com/FuelRats/eslint-config-fuelrats/pull/3

[airbnb]: https://github.com/airbnb/javascript
[babel]: https://babeljs.io/
[babel-eslint-parser]: https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser
[babel-eslint-plugin]: https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin
[eslint-env]: https://eslint.org/docs/user-guide/configuring#specifying-environments
[eslint-config-fuelrats]: https://www.npmjs.com/package/@fuelrats/eslint-config
[eslint-plugin-import]: https://www.npmjs.com/package/eslint-plugin-import
[eslint-plugin-jsdoc]: https://www.npmjs.com/package/eslint-plugin-jsdoc
[install-peerdeps]: https://www.npmjs.com/package/install-peerdeps
