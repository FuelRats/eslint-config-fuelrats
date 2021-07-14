# FuelRats ESLint configs

Standard configurations for Fuel Rats ECMAScript projects





## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` aims to help unify style and standards across all major FuelRats Javascript projects.





## Packages

This is a monorepo for all eslint-related packages. Check them out below!


### [@fuelrats/eslint-config][eslint-config-fuelrats]

Base ESLint ruleset with [`@babel/eslint-parser`][babel-eslint-parser] as the primary parser. Generally intended for node.js backend projects.


### [@fuelrats/eslint-config-react][eslint-config-fuelrats-react]

Companion config to [`@fuelrats/eslint-config`][eslint-config-fuelrats]. Built specifically for our react projects.


### [@fuelrats/eslint-plugin][eslint-plugin-fuelrats]

Optional plugin to provide custom lint rules for our projects to follow.



## Installation
* For regular javascript or node.js projects, go to [`@fuelrats/eslint-config`][eslint-config-fuelrats].
* For React projects, go to [`@fuelrats/eslint-config-react`][eslint-config-fuelrats-react].
* For projects which utilize typescript, see the best corresponding package above





## Development

This monorepo uses yarn workspaces to manage dependencies and versioning. When downloading for development, follow these steps:

1. Clone the Repository
```bash
$ gh repo clone fuelrats/eslint-config-fuelrats && cd eslint-config-fuelrats
```

2. Let yarn install everything for you
```bash
$ yarn install
```

3. Done! 🎉

### Publishing and Versioning

**FOR TECHRATS**

To publish and version the monorepo packages, Read [this](docs/publishing_and_versions.md).

## Credits
Our code style and this config set was inspired by and derived from the AirBnB javascript style guide.

[Send some love their way 😍🎉🎊][airbnb]





[airbnb]: https://github.com/airbnb/javascript
[babel]: https://babeljs.io/
[babel-eslint-parser]: https://www.npmjs.com/package/@babel/eslint-parser
[babel-eslint-plugin]: https://www.npmjs.com/package/@babel/eslint-plugin
[eslint-config-fuelrats]: packages/eslint-config
[eslint-config-fuelrats-react]: packages/eslint-config-react
[eslint-plugin-fuelrats]: packages/eslint-plugin
