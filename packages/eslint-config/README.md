# [@fuelrats/eslint-config][eslint-config-fuelrats]

* Base ESLint ruleset with [`@babel/eslint-parser`][babel-eslint-parser] as the primary parser. Generally intended for node.js backend projects.
    * Assumes an ECMAScript 2020 environment with module syntax and [`@babel/core`][babel] as the primary transpiler.
    * Includes [`@babel/eslint-plugin`][babel-eslint-plugin] for providing core rule compatibility for common babel plugins.
    * Includes [`eslint-plugin-import`][eslint-plugin-import] for additional ESModule linting.
    * Includes [`eslint-plugin-jsdoc`][eslint-plugin-jsdoc] for JSDoc block linting.
    * Also includes a `purejs` preset which does not enable [`@babel/eslint-parser`][babel-eslint-parser] and [`@babel/eslint-plugin`][babel-eslint-plugin].
    * Also includes a `typescript` preset which replaces [`@babel/eslint-parser`][babel-eslint-parser] for [`@typescript-eslint/parser`][typescript-eslint].




## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` aims to help unify style and standards across all major FuelRats projects.






## Installation

Add `@fuelrats/eslint-config` and it's depdendencies to your project.

```bash
yarn add -D eslint \
            @babel/core \
            @babel/eslint-parser \
            @babel/eslint-plugin \
            eslint-plugin-import \
            eslint-plugin-jsdoc \
            @fuelrats/eslint-config
```

or

```bash
npm i -D eslint \
         @babel/core \
         @babel/eslint-parser \
         @babel/eslint-plugin \
         eslint-plugin-import \
         eslint-plugin-jsdoc \
         @fuelrats/eslint-config
```

Then configure eslint accordingly!

## Configuration

1. Add the following to your `.eslintrc` file:

```json
{
  "extends": "@fuelrats/eslint-config"
}
```

2. Setup additional environment options. This config only enables the `"es2020"` environment. All other env settings are up to your project.
    * For more information on eslint envrionment settings, visit [the ESLint docs][eslint-env]



### Without Babel
Babel parser is the default for this config, however not it's not required. a `purejs` preset is also available.

```json
{
  "extends": "@fuelrats/eslint-config/purejs"
}
```

Using this preset, you may safely remove `@babel/core`, `@babel/eslint-parser` and `@babel/eslint-plugin` from your dependencies.





## Installation for TypeScript

A [`TypeScript`][typescript] config preset is now in the works! Currently configured rules may change significantly before it's considered stable,
however it is available in `v2.4.0` and later.

**⚠️WARNING⚠️**

This config is a work in progress, and may not reflect our final TypeScript project code style.

### Install

Install the [`typescript-eslint`][typescript-eslint] dependencies with `@fuelrats/eslint-config` instead of the usual [`@babel/eslint-parser`][babel-eslint-parser] dependencies.

```bash
yarn add -D eslint \
            typescript \
            @typescript-eslint/parser \
            @typescript-eslint/eslint-plugin \
            eslint-plugin-import \
            eslint-plugin-jsdoc \
            @fuelrats/eslint-config
```

or

```bash
npm i -D eslint \
         typescript \
         @typescript-eslint/parser \
         @typescript-eslint/eslint-plugin \
         eslint-plugin-import \
         eslint-plugin-jsdoc \
         @fuelrats/eslint-config
```

### Configure

Then add the following to your `.eslintrc` file:

```json
{
  "extends": "@fuelrats/eslint-config/typescript"
}
```

As with the default Babel config, environment variables will still need to be defined. For a full list of supported environment settings, visit [the ESLint docs][eslint-env]



## Credits
Our code style, and this config set, was inspired by and derived from the AirBnB JavaScript style guide.

[Send some love their way 😍🎉🎊][airbnb]





[airbnb]: https://github.com/airbnb/javascript
[babel]: https://babeljs.io/
[typescript]: https://www.typescriptlang.org
[typescript-eslint]: https://typescript-eslint.io
[babel-eslint-parser]: https://www.npmjs.com/package/@babel/eslint-parser
[babel-eslint-plugin]: https://www.npmjs.com/package/@babel/eslint-plugin
[eslint-env]: https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
[eslint-config-fuelrats]: https://www.npmjs.com/package/@fuelrats/eslint-config
[eslint-plugin-fuelrats]: https://www.npmjs.com/package/@fuelrats/eslint-plugin
[eslint-plugin-import]: https://www.npmjs.com/package/eslint-plugin-import
[eslint-plugin-jsdoc]: https://www.npmjs.com/package/eslint-plugin-jsdoc
