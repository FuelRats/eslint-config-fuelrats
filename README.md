# FuelRats ESLint configs

Standard configurations for Fuel Rats ECMAScript projects

## Motivation

The TechRat team of The FuelRats utilize ECMAScript on all fronts. Over time these projects have strayed in code standards as no common base has been shared between them.

`@fuelrats/eslint-config` aims to help unify style and standards across all major FuelRats Javascript projects.

## Packages

This is a monorepo for all eslint-related packages. Check them out below!

### [@fuelrats/eslint-config][eslint-config-fuelrats]

ESLint configs for Plain JS, Babel, React, & TypeScript projects.

### [@fuelrats/eslint-plugin][eslint-plugin-fuelrats]

Optional plugin to provide custom lint rules for our projects.

## Installation

See [`@fuelrats/eslint-config`][eslint-config-fuelrats]

## Development

This monorepo uses yarn workspaces to manage dependencies and versioning. When downloading for development, follow these steps:

1. Clone the Repository

```bash
gh repo clone fuelrats/eslint-config-fuelrats && cd eslint-config-fuelrats
```

2. Let yarn install everything for you

```bash
yarn install
```

3. Done! 🎉

## Credits

Our code style and this config set was inspired by and derived from the AirBnB javascript style guide.

[Send some love their way 😍🎉🎊][airbnb]

[airbnb]: https://github.com/airbnb/javascript
[babel-eslint-parser]: https://www.npmjs.com/package/@babel/eslint-parser
[eslint-config-fuelrats]: packages/eslint-config
[eslint-plugin-fuelrats]: packages/eslint-plugin
