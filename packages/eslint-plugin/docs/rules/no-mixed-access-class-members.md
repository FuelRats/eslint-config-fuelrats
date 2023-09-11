# disallow public class members from sharing names with private members(no-mixed-access-class-members)

Private (`this.#foo`) class members can coexist with public (`this.foo`) members of the same name. Since public members don't need to be declared to be used, this can cause confusing behavior and access control issues.

## Rule Details

This rule aims to prevent confusion by disallowing public and private class members to share names.

Examples of **incorrect** code for this rule:

```js

class Foobar {
  #foo = 'hello world'

  bar () {
    return this.foo
  }
}

```

```js

class Foobar {
  static #foo = 'hello world'

  bar () {
    return Foobar.foo
  }
}

```

Examples of **correct** code for this rule:

```js

class Foobar {
  #foo = 'hello world'

  bar () {
    return this.#foo
  }
}

```

```js

class Foobar {
  static #foo = 'hello world'

  bar () {
    return Foobar.#foo
  }
}

```

## When Not To Use It

If you do not use private class members, or do not consider private and public names to be substantially similar, then you may safely disable this rule.

## Further Reading

This rule is made for use with the following stage 3 proposals (via `babel`):

* [Private methods](https://github.com/tc39/proposal-private-methods)
* [Class fields](https://github.com/tc39/proposal-class-fields)
* [Static class features](https://github.com/tc39/proposal-static-class-features)

## Resources

* [Rule Source](https://github.com/FuelRats/eslint-config-fuelrats/blob/master/packages/eslint-plugin/lib/rules/no-mixed-access-class-members.js)
