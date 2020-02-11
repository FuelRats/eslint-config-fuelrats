# [@fuelrats/eslint-config-react][eslint-config-fuelrats-react]

* Companion config to [`@fuelrats/eslint-config`][eslint-config-fuelrats]. Built specifically for our react projects.
    * Adds [`eslint-plugin-react`][eslint-plugin-react] for react and better JSX linting.
    * Adds [`eslint-plugin-react-hooks`][eslint-plugin-react-hooks] for react "rules of hooks" enforcement.
    * Adds [`eslint-plugin-jsx-a11y`][eslint-plugin-jsx-a11y] for enforcing website accessibility best practices.





## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` and `@fuelrats/eslint-config-react` aims to help unify style and standards across all major FuelRats projects.





## Setup

### Installation

We recommend the [`install-peerdeps`][install-peerdeps] package for automatically adding the peer dependencies required by this config.

**NOTE:** The commands below assume you are installing to `devDependencies`. If you want to install to your main `dependencies` (not recommended), remove the `-d` flag.

#### Via `npm` v5+

```bash
$ npx install-peerdeps -d @fuelrats/eslint-config && npx -d install-peerdeps @fuelrats/eslint-config-react
```

#### Via `yarn` 1.x

Yarn v1 does not have an included remote script runner. First you must globally install `install-peerdeps`:

```bash
$ yarn global add install-peerdeps
```

then run:

```bash
$ install-peerdeps -d -Y @fuelrats/eslint-config && install-peerdeps -d -Y @fuelrats/eslint-config-react
```


#### Via `yarn` 2 😎

```bash
$ yarn dlx install-peerdeps -d -Y @fuelrats/eslint-config && yarn dlx install-peerdeps -d -Y @fuelrats/eslint-config-react
```


#### Other Package managers

Refer to your manager docs, or just manually install everything (borrriiiiing). Below is a list of package names you can apply to the manager of your choice.

```bash
eslint babel-eslint eslint-plugin-babel eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @fuelrats/eslint-config @fuelrats/eslint-config-react
```


### Configuration

1. Add the following to your `.eslintrc` file:

```json
"extends": [
    "@fuelrats/eslint-config",
    "@fuelrats/eslint-config-react"
]
```

2. Setup additional environment options. This config only enables the `"es6"` (via `eslint-config`) and `"browser"` environments. All other env settings are up to your project.
    * For more information on eslint envrionment settings, visit [the eslint docs][eslint-env]
3. We recommend also setting your react settings per the `eslint-plugin-react` configuration docs.
    * This config defaults the react pragma to `"React"` and the react version to `"detect"`, but more configuration may be neccessary for your project.
    * More information can be found [here][eslint-plugin-react-config]





## Credits
Our code style and this config set was inspired by and derived from the AirBnB javascript style guide.

[Send some love their way 😍🎉🎊][airbnb]





[airbnb]: https://github.com/airbnb/javascript
[eslint-config-fuelrats]: https://www.npmjs.com/package/@fuelrats/eslint-config
[eslint-config-fuelrats-react]: https://www.npmjs.com/package/@fuelrats/eslint-config-react
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-react-hooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks
[eslint-plugin-react-config]: https://github.com/yannickcr/eslint-plugin-react#configuration
[install-peerdeps]: https://www.npmjs.com/package/install-peerdeps
