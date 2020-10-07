# [@fuelrats/eslint-config-react][eslint-config-fuelrats-react]

* Companion config to [`@fuelrats/eslint-config`][eslint-config-fuelrats]. Built specifically for our react projects.
    * Adds [`eslint-plugin-react`][eslint-plugin-react] for react and better JSX linting.
    * Adds [`eslint-plugin-react-hooks`][eslint-plugin-react-hooks] for react "rules of hooks" enforcement.
    * Adds [`eslint-plugin-jsx-a11y`][eslint-plugin-jsx-a11y] for enforcing website accessibility best practices.





## Note about v2

> v2 Changes a number of aspects of our code style which may lead to time consuming adjustments, and in some cases an outright refactor of your code.
>
> Please see PR [#3][] for a comprehensive list of changes made from `v1.2.5`
>
> Additionally, this config no longer extends `@fuelrats/eslint-config`. To migrate to v2, you must install both configs. See setup steps below.




## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` and `@fuelrats/eslint-config-react` aims to help unify style and standards across all major FuelRats projects.





## Installation

We recommend the [`install-peerdeps`][install-peerdeps] package for automatically adding the peer dependencies required by this config.

**NOTE:** The commands below assume you are installing to `devDependencies`. If you want to install to your main `dependencies` (not recommended), remove the `-d` flag.

### Via `npm` v5+

```bash
$ npx install-peerdeps -d @fuelrats/eslint-config && npx -d install-peerdeps @fuelrats/eslint-config-react
```

### Via `yarn` 1.x

Yarn v1 does not have an included remote script runner. First you must globally install `install-peerdeps`:

```bash
$ yarn global add install-peerdeps
```

then run:

```bash
$ install-peerdeps -d -Y @fuelrats/eslint-config && install-peerdeps -d -Y @fuelrats/eslint-config-react
```


### Via `yarn` 2 😎

```bash
$ yarn dlx install-peerdeps -d -Y @fuelrats/eslint-config && yarn dlx install-peerdeps -d -Y @fuelrats/eslint-config-react
```


### Other Package managers

Refer to your manager docs, or just manually install everything (borrriiiiing). Below is a list of package names you can apply to the manager of your choice.

```bash
eslint @babel/core @babel/eslint-parser @babel/eslint-plugin eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @fuelrats/eslint-config @fuelrats/eslint-config-react
```


## Configuration

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


### Next.js Users

Vercel has been working on an experimental eslint plugin to warn against anti-patterns within the Next.js framework. Our configuration for this plugin is already available. To activate it:

1. Install `@next/eslint-plugin-next` via your package manager
2. Extend the config file in your `.eslintrc`
```json
"extends": [
    "@fuelrats/eslint-config",
    "@fuelrats/eslint-config-react",
    "@fuelrats/eslint-config-react/plugins/next",
]
```


## Credits
Our code style and this config set was inspired by and derived from the AirBnB javascript style guide.

[Send some love their way 😍🎉🎊][airbnb]



[#3]: https://github.com/FuelRats/eslint-config-fuelrats/pull/3

[airbnb]: https://github.com/airbnb/javascript
[eslint-config-fuelrats]: https://www.npmjs.com/package/@fuelrats/eslint-config
[eslint-config-fuelrats-react]: https://www.npmjs.com/package/@fuelrats/eslint-config-react
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[eslint-plugin-react-hooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks
[eslint-plugin-react-config]: https://github.com/yannickcr/eslint-plugin-react#configuration
[install-peerdeps]: https://www.npmjs.com/package/install-peerdeps
