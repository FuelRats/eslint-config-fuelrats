# @fuelrats/eslint-config

* Base ESLint ruleset with babel-eslint as the primary parser. Intended for node.js backend projects.
    * Assumes an ES2018 class-based environment with babel transforms.
    * Includes [`eslint-plugin-import`][eslint-plugin-import] for additional ESModule linting.
    * Includes [`eslint-plugin-babel`][eslint-plugin-babel] for providing core rule compatibility for common babel plugins





## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` aims to help unify style and standards across all major FuelRats projects.

**These configs are in a draft stage, and are subject to frequent adjustments as we begin to unify across projects**





## Setup
1. Run `yarn global add install-peerdeps`. (this is such a useful tool you should have it anyway 😃)
2. Add the config and all peerdeps by running: `install-peerdeps @fuelrats/eslint-config`.
    * alternatively, if you use `npx` you could run `npx install-peerdeps @fuelrats/eslint-config`.
3. Add `"extends": ["@fuelrats/eslint-config"],` to your `.eslintrc` file.
4. Setup additional env options. By default, we only enable the es6 envronment. all other env settings are up to the project.
    * For more information on eslint envrionment settings, visit [the eslint docs][eslint-env]








## Credits
Our code style and this config set was inspired by and derived from the AirBnB javascript style guide.
[Send some love their way 😍🎉🎊][airbnb]





[airbnb]: https://github.com/airbnb/javascript
[eslint-env]: https://eslint.org/docs/user-guide/configuring#specifying-environments
[eslint-plugin-import]: https://www.npmjs.com/package/eslint-plugin-import
[eslint-plugin-babel]: https://www.npmjs.com/package/eslint-plugin-babel
