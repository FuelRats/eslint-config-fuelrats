# @fuelrats/eslint-config-react

* [`@fuelrats/eslint-config`][eslint-config-fuelrats] + react plugins and rules. Built specifically for our react projects.
    * Includes [`eslint-plugin-react`][eslint-plugin-react] for react and better JSX linting
    * Includes [`eslint-plugin-jsx-a11y`][eslint-plugin-jsx-a11y] for enforcing website accessibility best practices.






## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` aims to help unify style and standards across all major FuelRats projects.

**These configs are in a draft stage, and are subject to frequent adjustments as we begin to unify across projects**





## Setup
1. Run `yarn global add install-peerdeps`. (this is such a useful tool you should have it anyway 😃)
2. Add the config and all peerdeps by running: `install-peerdeps @fuelrats/eslint-config-react`.
    * alternatively, if you use `npx` you could run `npx install-peerdeps @fuelrats/eslint-config-react`.
3. Add `"extends": ["@fuelrats/eslint-config-react"],` to your `.eslintrc` file.
4. Setup additional env options. By default, we only enable the es6 envronment. all other env settings are up to the project.
    * For more information on eslint envrionment settings, visit [the eslint docs][eslint-env]
5. We recommend also setting your react settings per the `eslint-plugin-react` configuration docs.
    * By default, we configure eslint to use the default `React` pragma, and the current react version used in our react projects.
    * More information can be found [here][eslint-plugin-react-config]





## Credits
Our code style and this config set was inspired by and derived from the AirBnB javascript style guide.
[Send some love their way 😍🎉🎊][airbnb]





[airbnb]: https://github.com/airbnb/javascript
[eslint-config-fuelrats]: https://www.npmjs.com/package/@fuelrats/eslint-config
[eslint-env]: https://eslint.org/docs/user-guide/configuring#specifying-environments
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-react-config]: https://github.com/yannickcr/eslint-plugin-react#configuration
