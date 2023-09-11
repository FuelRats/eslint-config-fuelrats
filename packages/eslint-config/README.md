# [@fuelrats/eslint-config][eslint-config-fuelrats]

ESLint Configurations for The Fuel Rats! Fueling the galaxy, one ship at a time, since 3301.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Motivation](#motivation)
- [Installation](#installation)
  - [Default (Babel)](#default-babel)
  - [TypeScript](#typescript)
  - [React](#react)
  - [Plain JavaScript](#plain-javascript)
- [Credits](#credits)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Motivation

The TechRat team of The FuelRats utilize JavaScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` aims to help unify style and standards across all major FuelRats projects.

## Installation

Add dependencies for the intended project type, and extend the desired configs.


### Default (Babel)

```bash
yarn add -D eslint \
            @babel/core \
            @babel/eslint-parser \
            @babel/eslint-plugin \
            @eslint-community/eslint-plugin-eslint-comments \
            eslint-plugin-import \
            eslint-plugin-jsdoc \
            @fuelrats/eslint-config
```

Then in `.eslintrc`:

```json
{
  "extends": "@fuelrats/eslint-config"
}
```

### TypeScript

To use this configuration in a TypeScript project, instead of installing the default set of dependencies, install the following:

```bash
yarn add -D eslint \
         typescript \
         @typescript-eslint/eslint-plugin \
         @typescript-eslint/parser \
         @eslint-community/eslint-plugin-eslint-comments \
         eslint-plugin-import \
         eslint-plugin-jsdoc \
         @fuelrats/eslint-config
```

then in `.eslintrc`:

```json
{
  "extends": "@fuelrats/eslint-config/typescript",
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```


### React

The `react` config is an addon config that may be used in conjunction with either Babel or TypeScript. To add this configuration, install the additional plugins used:

```bash
yarn add -D eslint-plugin-react \
            eslint-plugin-react-hooks \
            eslint-plugin-jsx-a11y
```

then in `.eslintrc`:

```json
{
  "extends": [
    "@fuelrats/eslint-config", // Or "@fuelrats/eslint-config/typescript"
    "@fuelrats/eslint-config/react"
  ]
}
```

### Plain JavaScript

In a project without a transpiler? No problem! Babel is an optional addon that extends a base pure JavaScript config.

```bash
# or `npm i -D ...`
yarn add -D eslint \
            @eslint-community/eslint-comments \
            eslint-plugin-import \
            eslint-plugin-jsdoc \
            @fuelrats/eslint-config
```

Then in `.eslintrc`:

```json
{
  "extends": "@fuelrats/eslint-config/purejs"
}
```

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
[eslint-plugin-eslint-comments]: https://github.com/mysticatea/eslint-plugin-eslint-comments
[eslint-plugin-import]: https://www.npmjs.com/package/eslint-plugin-import
[eslint-plugin-jsdoc]: https://www.npmjs.com/package/eslint-plugin-jsdoc
