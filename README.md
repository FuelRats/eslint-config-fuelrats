# FuelRats ESLint configs

Standard configurations for Fuel Rats ECMAScript projects


## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` aims to help unify style and standards across all major FuelRats projects.

**These configs are in a draft stage, and are subject to frequent adjustments as we begin to unify across projects**



## Flavors
This config currently comes in 2 flavors


### @fuelrats/eslint-config

* Base ESLint ruleset with babel-eslint as the primary parser. Intended for node.js backend projects.
    * Assumes an ES2018 class-based environment with babel transforms.
    * Includes `eslint-plugin-import` for additional ESModule linting.
    * Includes `eslint-plugin-babel` for providing core rule compatibility for common babel plugins


### @fuelrats/eslint-config-react

* `@fuelrats/eslint-config` + react plugins and rules. Built specifically for our react projects.
    * Includes `eslint-plugin-react` for react and better JSX linting
    * Includes `eslint-plugin-jsxa11y` for enforcing website accessibility best practices.





## Setup
1. perform `yarn add @fuelrats/eslint-config` or `yarn add @fuelrats/eslint-config-react`
2. Install all peerDependencies for your flavor
    1. run `yarn global add install-peerdeps` (this is such a useful package you should have it anyway 😃)
    2. then run `install-peerdeps @fuelrats/eslint-config` or `install-peerdeps @fuelrats/eslint-config-react`
3. add `"extends": ["@fuelrats"],` or `"extends": ["@fuelrats/eslint-config-react"],` to your `.eslintrc` file
4. Setup additional env options. By default, we only enable the es6 envronment. all other env settings are up to the project.
    * for more information on this, visit [the eslint docs](https://eslint.org/docs/user-guide/configuring#specifying-environments)





## Credits
Our code style and this config set was inspired by and derived from the AirBnB javascript style guide
[Send some love their way 😍🎉🎊](https://github.com/airbnb/javascript)
