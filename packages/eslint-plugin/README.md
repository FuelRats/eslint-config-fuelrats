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

There is an optional plugin ruleset within the config package. Add it to your `extends` array to activate it:

```json
{
    "extends: [
        "@fuelrats/eslint-config",
        "@fuelrats/eslint-config/plugins/fuelrats"
    ]
}


### Without `@fuelrats/eslint-config`

Add `@fuelrats` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@fuelrats"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@fuelrats/no-mixed-access-class-members": "error"
    }
}
```

## Rules
```
✅ = Recommended rule
🔧 = Auto-fixable with "--fix"
💭 = provides suggestions to fix the issue
```
- [`@fuelrats/no-mixed-access-class-members`]: Disallow public class members to share names with private members  (✅ | 💭)


[`@fuelrats/no-mixed-access-class-members`]: docs/rules/no-mixed-access-class-members.md
