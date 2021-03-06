# FuelRats ESLint configs

Standard configurations for Fuel Rats ECMAScript projects





## Note about v2

> v2 Changes a number of aspects of our code style which may lead to time consuming adjustments, and in some cases an outright refactor of your code.
>
> Please see PR [#3][] for a comprehensive list of changes made from `v1.2.5`
>
> If you are a react user, [`@fuelrats/eslint-config-react`][eslint-config-fuelrats-react] no longer extends [`@fuelrats/eslint-config`][eslint-config-fuelrats]. See the react package [`README.md`][eslint-config-fuelrats-react] for more information.


## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` aims to help unify style and standards across all major FuelRats Javascript projects.





## Packages
This config has two separate packages:

### [@fuelrats/eslint-config][eslint-config-fuelrats]

* Base ESLint ruleset with [`@babel/eslint-parser`][babel-eslint-parser] as the primary parser. Generally intended for node.js backend projects.
    * Assumes an ECMAScript 2020 environment with [`Babel 7`][babel] as the primary transpiler.
    * Includes [`@babel/eslint-plugin`][eslint-plugin-babel] for providing core rule compatibility for common babel plugins.
    * Includes [`eslint-plugin-import`][eslint-plugin-import] for additional ESModule linting.
    * Includes [`eslint-plugin-jsdoc`][eslint-plugin-jsdoc] for JSDoc block linting.
    * Also includes a `purejs` preset which disables [`@babel/eslint-parser`][babel-eslint-parser] and [`@babel/eslint-plugin`][eslint-plugin-babel].


### [@fuelrats/eslint-config-react][eslint-config-fuelrats-react]

* Companion config to [`@fuelrats/eslint-config`][eslint-config-fuelrats]. Built specifically for our react projects.
    * Adds [`eslint-plugin-react`][eslint-plugin-react] for react and better JSX linting.
    * Adds [`eslint-plugin-react-hooks`][eslint-plugin-react-hooks] for react "rules of hooks" enforcement.
    * Adds [`eslint-plugin-jsx-a11y`][eslint-plugin-jsx-a11y] for enforcing website accessibility best practices.





## Installation
* For regular javascript or node.js projects, go to [`@fuelrats/eslint-config`][eslint-config-fuelrats].
* For React projects, go to [`@fuelrats/eslint-config-react`][eslint-config-fuelrats-react].






## Development

This monorepo uses yarn workspaces to manage dependencies and versioning. When downloading for development, follow these steps:

1. Clone the Repository
```bash
$ git clone https://github.com/FuelRats/eslint-config-fuelrats.git && cd eslint-config-fuelrats
```
2. Let yarn install everything for you
```bash
$ yarn install
```
3. Done! 🎉


## Credits
Our code style and this config set was inspired by and derived from the AirBnB javascript style guide.

[Send some love their way 😍🎉🎊][airbnb]


[#3]: https://github.com/FuelRats/eslint-config-fuelrats/pull/3

[airbnb]: https://github.com/airbnb/javascript
[babel]: https://babeljs.io/
[babel-eslint-parser]: https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser
[babel-eslint-plugin]: https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin
[eslint-config-fuelrats]: packages/eslint-config
[eslint-config-fuelrats-react]: packages/eslint-config-react
[eslint-plugin-import]: https://www.npmjs.com/package/eslint-plugin-import
[eslint-plugin-jsdoc]: https://www.npmjs.com/package/eslint-plugin-jsdoc
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-react-hooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks
