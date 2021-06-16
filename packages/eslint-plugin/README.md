# @fuelrats/eslint-plugin

Companion rules for `@fuelrats/eslint-config`

## Installation

We'll assume you already have ESLint installed. If not, [go get started!](https://eslint.org/docs/user-guide/getting-started)

You should also setup babel as most of these rules only work with `@babel/eslint-parser`. If you haven't, [go here.](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)

If you are using `@fuelrats/eslint-config`, all of this setup should be done already.

Now, lets install the plugin

```bash
$ npm install --save-dev @fuelrats/eslint-plugin
# or
$ yarn add --dev @fuelrats/eslint-plugin
```

And thats it! See Usage below on how to activate this plugin.

## Usage

### With `@fuelrats/eslint-config`

As of `v2.4.0` the additional rules provided by this plugin are default in The FuelRats eslint ruleset.

### Without `@fuelrats/eslint-config`

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
