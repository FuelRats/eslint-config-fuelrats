# [@fuelrats/eslint-config-react][eslint-config-fuelrats-react]

* Companion config to [`@fuelrats/eslint-config`][eslint-config-fuelrats]. Built specifically for our react projects.
    * Adds [`eslint-plugin-react`][eslint-plugin-react] for react and better JSX linting.
    * Adds [`eslint-plugin-react-hooks`][eslint-plugin-react-hooks] for react "rules of hooks" enforcement.
    * Adds [`eslint-plugin-jsx-a11y`][eslint-plugin-jsx-a11y] for enforcing website accessibility best practices.
    * Also includes an optional [TypeScript][typescript] preset to be used alongside the base configuration's `typescript` preset.




## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` and `@fuelrats/eslint-config-react` aims to help unify style and standards across all major FuelRats projects.





## Installation

Add `@fuelrats/eslint-config`, `@fuelrats/eslint-config-react`, and their depdendencies to your project.

```bash
yarn add -D eslint \
            @babel/core \
            @babel/eslint-parser \
            @babel/eslint-plugin \
            eslint-plugin-import \
            eslint-plugin-jsdoc \
            eslint-plugin-jsx-a11y \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            @fuelrats/eslint-config \
            @fuelrats/eslint-config-react
```

or

```bash
npm i -D eslint \
         @babel/core \
         @babel/eslint-parser \
         @babel/eslint-plugin \
         eslint-plugin-import \
         eslint-plugin-jsdoc \
         eslint-plugin-jsx-a11y \
         eslint-plugin-react \
         eslint-plugin-react-hooks \
         @fuelrats/eslint-config \
         @fuelrats/eslint-config-react
```

## Configuration

1. Add the following to your `.eslintrc` file:

```json
{
  "extends": [
      "@fuelrats/eslint-config",
      "@fuelrats/eslint-config-react"
  ]
}
```

2. Setup additional environment options. This config only enables the `"es2020"` and `"browser"` environments. All other env settings are up to your project.
    * For more information on eslint envrionment settings, visit [the eslint docs][eslint-env]
3. We recommend also setting your react settings per the `eslint-plugin-react` configuration docs.
    * This config defaults the react pragma to `"React"` and the react version to `"detect"`, but more configuration may be neccessary for your project.
    * More information can be found [here][eslint-plugin-react-config]




## Install With TypeScript

A [`TypeScript`][typescript] config preset is now in the works! Currently configured rules may change significantly before it's considered stable,
however it is available in `v2.4.0` and later.

**⚠️WARNING⚠️**

This config is a work in progress, and may not reflect our final TypeScript project code style.

### Install

Install the [`typescript-eslint`][typescript-eslint] dependencies with `@fuelrats/eslint-config-react` instead of the usual [`@babel/eslint-parser`][babel-eslint-parser] dependencies.

```bash
yarn add -D eslint \
            typescript \
            @typescript-eslint/parser \
            @typescript-eslint/eslint-plugin \
            eslint-plugin-import \
            eslint-plugin-jsdoc \
            eslint-plugin-jsx-a11y \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            @fuelrats/eslint-config \
            @fuelrats/eslint-config-react
```

or

```bash
npm i -D eslint \
         typescript \
         @typescript-eslint/parser \
         @typescript-eslint/eslint-plugin \
         eslint-plugin-import \
         eslint-plugin-jsdoc \
         eslint-plugin-jsx-a11y \
         eslint-plugin-react \
         eslint-plugin-react-hooks \
         @fuelrats/eslint-config \
         @fuelrats/eslint-config-react
```

### Configure

Then add the following to your `.eslintrc` file:

```json
{
  "extends": [
      "@fuelrats/eslint-config/typescript",
      "@fuelrats/eslint-config-react/typescript"
  ]
}
```

As with the default config, environment variables and further React options may need to be configured. See Steps 2 and 3 of [Configuration](#configuration) above.




## Credits
Our code style and this config set was inspired by and derived from the AirBnB javascript style guide.

[Send some love their way 😍🎉🎊][airbnb]



[airbnb]: https://github.com/airbnb/javascript
[typescript]: https://www.typescriptlang.org
[typescript-eslint]: https://typescript-eslint.io
[babel-eslint-parser]: https://www.npmjs.com/package/@babel/eslint-parser
[babel-eslint-plugin]: https://www.npmjs.com/package/@babel/eslint-plugin
[eslint-config-fuelrats]: https://www.npmjs.com/package/@fuelrats/eslint-config
[eslint-config-fuelrats-react]: https://www.npmjs.com/package/@fuelrats/eslint-config-react
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-react-hooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks
[eslint-plugin-react-config]: https://github.com/yannickcr/eslint-plugin-react#configuration
