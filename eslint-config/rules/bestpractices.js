module.exports = {
  rules: {
    // enforce getter and setter pairs in objects
    'accessor-pairs': ['error', {
      getWithoutSet: false,
      setWithoutGet: true,
    }],


    // enforce return statements in callbacks of array methods
    'array-callback-return': ['error', {
      allowImplicit: false,
    }],


    // enforce the use of variables within the scope they are defined
    'block-scoped-var': ['error'],


    // enforce that class methods utilize this
    'class-methods-use-this': ['error'],


    // enforce a maximum cyclomatic complexity allowed in a program
    // DISABLED: To be determined by project
    'complexity': ['off'],


    // require return statements to either always or never specify values
    'consistent-return': ['error'],


    // enforce consistent brace style for all control statements
    'curly': ['error', 'all'],


    // require default cases in switch statements
    'default-case': ['error', {
      commentPattern: '^I have no idea what I\'m doing$',
    }],


    // enforce consistent newlines before and after dots
    'dot-location': ['error', 'property'],


    // enforce dot notation whenever possible
    'dot-notation': ['error'],


    // require the use of === and !==
    'eqeqeq': ['error', 'always', {
      null: 'always',
    }],


    // require for-in loops to include an if statement
    'guard-for-in': ['error'],


    // enforce a maximum number of classes per file
    'max-classes-per-file': ['error', 2],


    // disallow the use of alert, confirm, and prompt
    'no-alert': ['error'],


    // disallow the use of arguments.caller or arguments.callee
    'no-caller': ['error'],


    // disallow lexical declarations in case clauses
    'no-case-declarations': ['error'],


    // disallow division operators explicitly at the beginning of regular expressions
    // DISABLED: We feel that forcing escape characters just serve to make the regex even less readable than what a momentary confusion is worth.
    'no-div-regex': ['off'],


    // disallow else blocks after return statements in if statements
    'no-else-return': ['error', {
      allowElseIf: false,
    }],


    // disallow empty functions
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
      ],
    }],


    // disallow empty destructuring patterns
    'no-empty-pattern': ['error'],


    // disallow null comparisons without type-checking operators
    'no-eq-null': ['error'],


    // disallow the use of eval()
    'no-eval': ['error'],


    // disallow extending native types
    'no-extend-native': ['error'],


    // disallow unnecessary calls to .bind()
    'no-extra-bind': ['error'],


    // disallow unnecessary labels
    'no-extra-label': ['error'],


    // disallow fallthrough of case statements
    'no-fallthrough': ['error'],


    // disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': ['error'],


    // disallow assignments to native objects or read-only global variables
    'no-global-assign': ['error'],


    // disallow shorthand type conversions
    'no-implicit-coercion': ['error'],


    // disallow variable and function declarations in the global scope
    'no-implicit-globals': ['error'],


    // disallow the use of eval()-like methods
    'no-implied-eval': ['error'],


    // disallow this keywords outside of classes or class-like objects
    // DISABLED: using babel/no-invalid-this for compatibility
    'no-invalid-this': ['off'],


    // disallow the use of the __iterator__ property
    'no-iterator': ['error'],


    // disallow labeled statements
    'no-labels': ['error'],


    // disallow unnecessary nested blocks
    'no-lone-blocks': ['error'],


    // disallow function declarations and expressions inside loop statements
    'no-loop-func': ['error'],


    // disallow magic numbers
    'no-magic-numbers': ['error', {
      ignore: [
        -1, // for decrement
        0, // for explicit length checks
        1, // for increment
        24, // for time math
        60, // for time math
        100, // for currency math
        1000, // for time math
      ],
      enforceConst: true,
    }],


    // disallow multiple spaces
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],


    // disallow multiline strings
    'no-multi-str': ['error'],


    // disallow new operators outside of assignments or comparisons
    'no-new': ['error'],


    // disallow new operators with the Function object
    'no-new-func': ['error'],


    // disallow new operators with the String, Number, and Boolean objects
    'no-new-wrappers': ['error'],


    // disallow octal literals
    'no-octal': ['error'],


    // disallow octal escape sequences in string literals
    'no-octal-escape': ['error'],


    // disallow reassigning function parameters
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'Component', // for React HOCs
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        'target', // for ESNext decorators
      ],
    }],


    // disallow the use of the __proto__ property
    'no-proto': ['error'],


    // disallow variable redeclaration
    'no-redeclare': ['error'],


    // disallow certain properties on certain objects
    'no-restricted-properties': ['error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated.',
      },
    ],


    // disallow assignment operators in return statements
    'no-return-assign': ['error', 'always'],


    // disallow unnecessary return await
    'no-return-await': ['error'],


    // disallow javascript: urls
    'no-script-url': ['error'],


    // disallow assignments where both sides are exactly the same
    'no-self-assign': ['error', {
      props: true,
    }],


    // disallow comparisons where both sides are exactly the same
    'no-self-compare': ['error'],


    // disallow comma operators
    'no-sequences': ['error'],


    // disallow throwing literals as exceptions
    'no-throw-literal': ['error'],


    // disallow unmodified loop conditions
    'no-unmodified-loop-condition': ['error'],


    // disallow unused expressions
    // DISABLED: using babel/no-unused-expressions for compatibility
    'no-unused-expressions': ['off'],


    // disallow unused labels
    'no-unused-labels': ['error'],


    // disallow unnecessary calls to .call() and .apply()
    'no-useless-call': ['error'],


    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': ['error'],


    // disallow unnecessary escape characters
    'no-useless-escape': ['error'],


    // disallow redundant return statements
    'no-useless-return': ['error'],


    // disallow void operators
    'no-void': ['error'],


    // disallow specified warning terms in comments
    'no-warning-comments': ['warn', {
      terms: ['todo', 'fixme'],
      location: 'start',
    }],


    // disallow with statements
    'no-with': ['error'],


    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['error', {
      allowEmptyReject: false,
    }],


    // enforce the consistent use of the radix argument when using parseInt()
    'radix': ['error'],


    // disallow async functions which have no await expression (note: this is a wonderful rule that should always be used)
    'require-await': ['error'],


    // enforce the use of u flag on RegExp
    'require-unicode-regexp': ['error'],


    // require var declarations be placed at the top of their containing scope
    'vars-on-top': ['error'],


    // require parentheses around immediate function invocations
    'wrap-iife': ['error', 'outside', {
      functionPrototypeMethods: false,
    }],


    // require or disallow “Yoda” conditions
    'yoda': ['error'],
  },
}
