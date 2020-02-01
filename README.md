# FuelRats ESLint configs

Standard configurations for Fuel Rats ECMAScript projects





## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` aims to help unify style and standards across all major FuelRats Javascript projects.





## Packages
This config has two separate packages. The first is the main config and the second is a companion package for react projects.


### [@fuelrats/eslint-config][eslint-config-fuelrats]

* Base ESLint ruleset with `babel-eslint` as the primary parser. Generally intended for node.js backend projects.
    * Assumes an ES2018 class-based environment with babel transforms.
    * Includes [`eslint-plugin-import`][eslint-plugin-import] for additional ESModule linting.
    * Includes [`eslint-plugin-babel`][eslint-plugin-babel] for providing core rule compatibility for common babel plugins.
    * Includes [`eslint-plugin-jsdoc`][eslint-plugin-jsdoc] for JSDoc block linting. If you do not use JSDoc, set `jsdoc/"require-jsdoc": ["off"]` in your `.eslintrc` file.
    * Also includes a `purejs` preset which disables `eslint-plugin-babel`.


### [@fuelrats/eslint-config-react][eslint-config-fuelrats-react]

* Companion config to [`@fuelrats/eslint-config`][eslint-config-fuelrats]. Built specifically for our react projects.
    * Adds [`eslint-plugin-react`][eslint-plugin-react] for react and better JSX linting.
    * Adds [`eslint-plugin-react-hooks`][eslint-plugin-react-hooks] for react "rules of hooks" enforcement.
    * Adds [`eslint-plugin-jsx-a11y`][eslint-plugin-jsx-a11y] for enforcing website accessibility best practices.





## Setup
1. Choose your flavor. [`@fuelrats/eslint-config`][eslint-config-fuelrats] or [`@fuelrats/eslint-config-react`][eslint-config-fuelrats-react].
2. Go to the associated directory of your flavor in this repo for more setup information 😅.






## Development

This monorepo uses yarn workspaces to manage dependencies and versioning. When downloading for development, follow these steps:

1. `$ git clone https://github.com/FuelRats/eslint-config-fuelrats.git && cd eslint-config-fuelrats`
2. `$ yarn install`
3. Done! 🎉


## Credits
Our code style and this config set was inspired by and derived from the AirBnB javascript style guide.
[Send some love their way 😍🎉🎊][airbnb]





[airbnb]: https://github.com/airbnb/javascript
[eslint-config-fuelrats]: https://www.npmjs.com/package/@fuelrats/eslint-config
[eslint-config-fuelrats-react]: https://www.npmjs.com/package/@fuelrats/eslint-config-react
[eslint-plugin-babel]: https://www.npmjs.com/package/eslint-plugin-babel
[eslint-plugin-import]: https://www.npmjs.com/package/eslint-plugin-import
[eslint-plugin-jsdoc]: https://www.npmjs.com/package/eslint-plugin-jsdoc
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-react-hooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks
