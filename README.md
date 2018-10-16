# FuelRats ESLint configs

Standard configurations for Fuel Rats ECMAScript projects





## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` aims to help unify style and standards across all major FuelRats projects.

**These configs are in a draft stage, and are subject to frequent adjustments as we begin to unify across projects**





## Flavors
This config currently comes in 2 flavors


### [@fuelrats/eslint-config][baseconfig]

* Base ESLint ruleset with babel-eslint as the primary parser. Generally intended for node.js backend projects.
    * Assumes an ES2018 class-based environment with babel transforms.
    * Includes `eslint-plugin-import` for additional ESModule linting.
    * Includes `eslint-plugin-babel` for providing core rule compatibility for common babel plugins


### [@fuelrats/eslint-config-react][reactconfig]

* `@fuelrats/eslint-config` + react plugins and rules. Built specifically for our react projects.
    * Includes `eslint-plugin-react` for react and JSX linting
    * Includes `eslint-plugin-jsxa11y` for enforcing website accessibility best practices.





## Setup
1. Choose your flavor. `@fuelrats/eslint-config` or `@fuelrats/eslint-config-react`.
2. Go to the associated directory of your flavor in this repo for more setup information 😅.





## Credits
Our code style and this config set was inspired by and derived from the AirBnB javascript style guide.
[Send some love their way 😍🎉🎊][airbnb]





[airbnb]: https://github.com/airbnb/javascript
[baseconfig]: https://www.npmjs.com/package/@fuelrats/eslint-config
[reactconfig]: https://www.npmjs.com/package/@fuelrats/eslint-config-react
