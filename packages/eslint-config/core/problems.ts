export = {
  rules: {
    /**
     * Enforce return statements in callbacks of array methods
     */
    'array-callback-return': ['error', {
      allowImplicit: false,
    }],


    /**
     * Require `super()` calls in constructors
     */
    'constructor-super': ['error'],


    /**
     * Enforce "for" loop update clause moving the counter in the right direction.
     */
    'for-direction': ['error'],


    /**
     * Enforce `return` statements in getters
     */
    'getter-return': ['error'],


    /**
     * Disallow using an async function as a Promise executor
     */
    'no-async-promise-executor': ['error'],


    /**
     * Disallow `await` inside of loops
     */
    'no-await-in-loop': ['error'],


    /**
     * Disallow reassigning class members
     */
    'no-class-assign': ['error'],


    /**
     * Disallow comparing against -0
     */
    'no-compare-neg-zero': ['error'],


    /**
     * Disallow assignment operators in conditional expressions
     */
    'no-cond-assign': ['error', 'always'],


    /**
     * Disallow reassigning `const` variables
     */
    'no-const-assign': ['error'],


    /**
     * Disallow expressions where the operation doesn"t affect the value
     */
    'no-constant-binary-expression': ['error'],


    /**
     * Disallow constant expressions in conditions
     */
    'no-constant-condition': ['error'],


    /**
     * Disallow returning value from constructor
     */
    'no-constructor-return': ['error'],


    /**
     * Disallow control characters in regular expressions
     */
    'no-control-regex': ['error'],


    /**
     * Disallow the use of `debugger`
     *
     * The impact of debugger slipping into production code HEAVILY outweighs it's benefit.
     */
    'no-debugger': ['error'],


    /**
     * Disallow duplicate arguments in `function` definitions
     */
    'no-dupe-args': ['error'],


    /**
     * Disallow duplicate class members
     */
    'no-dupe-class-members': ['error'],


    /**
     * Disallow duplicate conditions in if-else-if chains
     */
    'no-dupe-else-if': ['error'],


    /**
     * Disallow duplicate keys in object literals
     */
    'no-dupe-keys': ['error'],


    /**
     * Disallow duplicate case labels
     */
    'no-duplicate-case': ['error'],


    /**
     * Disallow duplicate module imports
     */
    'no-duplicate-imports': ['off'],


    /**
     * Disallow empty character classes in regular expressions
     */
    'no-empty-character-class': ['error'],


    /**
     * Disallow empty destructuring patterns
     */
    'no-empty-pattern': ['error'],


    /**
     * Disallow reassigning exceptions in `catch` clauses
     */
    'no-ex-assign': ['error'],


    /**
     * Disallow fallthrough of `case` statements
     */
    'no-fallthrough': ['error', {
      commentPattern: 'OMIT_BREAK_I_KNOW_WHAT_IM_DOING',
      allowEmptyCase: false,
    }],


    /**
     * Disallow reassigning `function` declarations
     */
    'no-func-assign': ['error'],


    /**
     * Disallow assigning to imported bindings
     */
    'no-import-assign': ['error'],


    /**
     * Disallow variable or `function` declarations in nested blocks
     */
    'no-inner-declarations': ['error'],


    /**
     * Disallow invalid regular expression strings in `RegExp` constructors
     */
    'no-invalid-regexp': ['error'],


    /**
     * Disallow irregular whitespace
     */
    'no-irregular-whitespace': ['error'],


    /**
     * Disallow literal numbers that lose precision
     */
    'no-loss-of-precision': ['error'],


    /**
     * Disallow characters which are made with multiple code points in character class syntax
     */
    'no-misleading-character-class': ['error'],


    /**
     * Disallow `new` operators with global non-constructor functions
     */
    'no-new-native-nonconstructor': ['error'],


    /**
     * Disallow `new` operators with the `Symbol` object
     */
    'no-new-symbol': ['error'],


    /**
     * Disallow calling global object properties as functions
     */
    'no-obj-calls': ['error'],


    /**
     * Disallow returning values from Promise executor functions
     */
    'no-promise-executor-return': ['error'],


    /**
     * Disallow calling some `Object.prototype` methods directly on objects
     */
    'no-prototype-builtins': ['error'],


    /**
     * Disallow assignments where both sides are exactly the same
     */
    'no-self-assign': ['error', {
      props: true,
    }],


    /**
     * Disallow comparisons where both sides are exactly the same
     */
    'no-self-compare': ['error'],


    /**
     * Disallow returning values from setters
     */
    'no-setter-return': ['error'],


    /**
     * Disallow sparse arrays
     */
    'no-sparse-arrays': ['error'],


    /**
     * Disallow template literal placeholder syntax in regular strings
     */
    'no-template-curly-in-string': ['error'],


    /**
     * Disallow `this`/`super` before calling `super()` in constructors
     */
    'no-this-before-super': ['error'],


    /**
     * Disallow the use of undeclared variables unless mentioned in `global` comments
     */
    'no-undef': ['error', {
      typeof: true,
    }],


    /**
     * Disallow confusing multiline expressions
     */
    'no-unexpected-multiline': ['error'],


    /**
     * Disallow unmodified loop conditions
     */
    'no-unmodified-loop-condition': ['error'],


    /**
     * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
     */
    'no-unreachable': ['error'],


    /**
     * Disallow loops with a body that allows only one iteration
     */
    'no-unreachable-loop': ['error'],


    /**
     * Disallow control flow statements in `finally` blocks
     */
    'no-unsafe-finally': ['error'],


    /**
     * Disallow negating the left operand of relational operators
     */
    'no-unsafe-negation': ['error', {
      enforceForOrderingRelations: true,
    }],


    /**
     * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
     */
    'no-unsafe-optional-chaining': ['error', {
      disallowArithmeticOperators: true,
    }],


    /**
     * Disallow unused private class members
     */
    'no-unused-private-class-members': ['error'],


    /**
     * Disallow unused variables
     */
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      argsIgnorePattern: '^_+$',
      ignoreRestSiblings: true,
    }],


    /**
     * Disallow the use of variables before they are defined
     */
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: true,
      allowNamedExports: false,
    }],


    /**
     * Disallow useless backreferences in regular expressions
     */
    'no-useless-backreference': ['error'],


    /**
     * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
     *
     * _DISABLED: until fixed? Persistent false positives has lead the TSC to remove this rule from eslint:recommended_
     *
     * See [eslint/eslint#12599](https://github.com/eslint/eslint/pull/12599)
     */
    'require-atomic-updates': ['off'],


    /**
     * Require calls to `isNaN()` when checking for `NaN`
     */
    'use-isnan': ['error', {
      enforceForSwitchCase: true,
      enforceForIndexOf: true,
    }],


    /**
     * Enforce comparing `typeof` expressions against valid strings
     */
    'valid-typeof': ['error'],
  },
} as const
