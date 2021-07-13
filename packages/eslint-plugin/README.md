# @fuelrats/eslint-plugin

Companion rules for `@fuelrats/eslint-config`

## Installation

We'll assume you already have ESLint installed. If not, [go get started!](https://eslint.org/docs/user-guide/getting-started)

You should also setup babel as most of these rules only work with `@babel/eslint-parser`. If you haven't, [go here.](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)

If you are using [`@fuelrats/eslint-config`][eslint-config-fuelrats], the preceeding steps will be done already.

Now, lets install the plugin

```bash
$ npm install --save-dev @fuelrats/eslint-plugin
# or
$ yarn add --dev @fuelrats/eslint-plugin
```

And thats it! To activate the plugin, see [Usage](#usage) below.

## Usage

Either extend the recommended config:

```json
{
    "extends": [
        "plugin:@fuelrats/recommended",
    ],
}
```

Or, add `@fuelrats` to the plugins section of your `.eslintrc` configuration file, Then configure the rules you wish to use under the rules section:

```json
{
    "plugins": [
        "@fuelrats"
    ]
    "rules": {
        "@fuelrats/default-export-matches-module-name": ["warn", { "caseInsensitive": false }],
        "@fuelrats/no-mixed-access-class-members": ["error"]
    }
}
```

## Rules
```
✅ = Recommended rule
🔧 = Auto-fixable with "--fix"
💭 = provides suggestions to fix the issue
```
- [`@fuelrats/default-export-matches-module-name`][]: Enforces default exports are consistently named the same as their module (file) name. (✅)
- [`@fuelrats/no-mixed-access-class-members`][]: Disallow public class members to share names with private members.  (✅ | 💭)


[`@fuelrats/default-export-matches-module-name`]: docs/rules/default-export-matches-module-name.md
[`@fuelrats/no-mixed-access-class-members`]: docs/rules/no-mixed-access-class-members.md






[eslint-config-fuelrats]: https://www.npmjs.com/package/@fuelrats/eslint-config
[eslint-plugin-fuelrats]: https://www.npmjs.com/package/@fuelrats/eslint-plugin
