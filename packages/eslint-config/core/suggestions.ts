import { confusingGlobals, propertyMaxPerLine } from '../_internal'

export = {
  rules: {
    /**
     * Enforce getter and setter pairs in objects and classes
     */
    'accessor-pairs': ['error', {
      enforceForClassMembers: true,
      getWithoutSet: false,
      setWithoutGet: true,
    }],


    /**
     * Require braces around arrow function bodies
     */
    'arrow-body-style': ['warn', 'as-needed', {
      requireReturnForObjectLiteral: true,
    }],


    /**
     * Enforce the use of variables within the scope they are defined
     */
    'block-scoped-var': ['error'],


    /**
     * Enforce camelcase naming convention
     */
    'camelcase': ['warn', {
      properties: 'never',
      ignoreGlobals: true,
      ignoreDestructuring: false,
      allow: [
        '^UNSAFE_', // for unsafe React lifecycle methods
        '^unstable_', // for unstable APIs
      ],
    }],


    /**
     * Enforce or disallow capitalization of the first letter of a comment
     */
    'capitalized-comments': ['off'],


    /**
     * Enforce that class methods utilize `this`
     */
    'class-methods-use-this': ['off'],


    /**
     * Enforce a maximum cyclomatic complexity allowed in a program
     */
    'complexity': ['off'],


    /**
     * Require `return` statements to either always or never specify values
     */
    'consistent-return': ['error'],


    /**
     * Enforce consistent naming when capturing the current execution context
     */
    'consistent-this': ['error', 'self'],


    /**
     * Enforce consistent brace style for all control statements
     */
    'curly': ['warn', 'all'],


    /**
     * Require `default` cases in `switch` statements
     */
    'default-case': ['error', {
      commentPattern: '^I have no idea what I\'m doing$',
    }],


    /**
     * Enforce default clauses in switch statements to be last
     */
    'default-case-last': ['warn'],


    /**
     * Enforce default parameters to be last
     */
    'default-param-last': ['off'],


    /**
     * Enforce dot notation whenever possible
     */
    'dot-notation': ['warn'],


    /**
     * Require the use of `===` and `!==`
     */
    'eqeqeq': ['error', 'always', {
      null: 'always',
    }],


    /**
     * Require function names to match the name of the variable or property to which they are assigned
     */
    'func-name-matching': ['warn', 'always', {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: true,
    }],


    /**
     * Require or disallow named `function` expressions
     */
    'func-names': ['warn', 'always', {
      generators: 'always',
    }],


    /**
     * Enforce the consistent use of either `function` declarations or expressions
     */
    'func-style': ['warn', 'declaration', {
      allowArrowFunctions: true,
    }],


    /**
     * Require grouped accessor pairs in object literals and classes
     */
    'grouped-accessor-pairs': ['off'],


    /**
     * Require `for-in` loops to include an `if` statement
     */
    'guard-for-in': ['error'],


    /**
     * Disallow specified identifiers
     */
    'id-denylist': ['off'],


    /**
     * Enforce minimum and maximum identifier lengths
     */
    'id-length': ['warn', {
      min: 2,
      max: 35,
      exceptions: [
        '_',
      ],
    }],


    /**
     * Require identifiers to match a specified regular expression
     */
    'id-match': ['off'],


    /**
     * Require or disallow initialization in variable declarations
     */
    'init-declarations': ['error', 'always'],


    /**
     * Require or disallow logical assignment logical operator shorthand
     */
    'logical-assignment-operators': ['warn', 'always', {
      enforceForIfStatements: true,
    }],


    /**
     * Enforce a maximum number of classes per file
     */
    'max-classes-per-file': ['off'],


    /**
     * Enforce a maximum depth that blocks can be nested
     */
    'max-depth': ['warn', 6],


    /**
     * Enforce a maximum number of lines per file
     */
    'max-lines': ['warn', 1000],


    /**
     * Enforce a maximum number of lines of code in a function
     */
    'max-lines-per-function': ['off'],


    /**
     * Enforce a maximum depth that callbacks can be nested
     */
    'max-nested-callbacks': ['warn', 5],


    /**
     * Enforce a maximum number of parameters in function definitions
     */
    'max-params': ['warn', propertyMaxPerLine],


    /**
     * Enforce a maximum number of statements allowed in function blocks
     */
    'max-statements': ['warn', 50],


    /**
     * Enforce a particular style for multiline comments
     */
    'multiline-comment-style': ['warn', 'starred-block'],


    /**
     * Require constructor names to begin with a capital letter
     */
    'new-cap': ['warn', {
      newIsCap: true,
      capIsNew: true,
      newIsCapExceptions: [],
      capIsNewExceptions: [
        'DELETE', // For HTTP methods
        'GET',
        'PATCH',
        'POST',
        'PUT',
        'Stripe', // For Stripe lib (which exists as window.Stripe)
      ],
      capIsNewExceptionPattern: '^(type|Sequelize)..', // Sequelize exceptions
      properties: true,
    }],


    /**
     * Disallow the use of `alert`, `confirm`, and `prompt`
     */
    'no-alert': ['error'],


    /**
     * Disallow `Array` constructors
     */
    'no-array-constructor': ['error'],


    /**
     * Disallow bitwise operators
     */
    'no-bitwise': ['error'],


    /**
     * Disallow the use of `arguments.caller` or `arguments.callee`
     */
    'no-caller': ['error'],


    /**
     * Disallow lexical declarations in case clauses
     */
    'no-case-declarations': ['error'],


    /**
     * Disallow arrow functions where they could be confused with comparisons
     */
    'no-confusing-arrow': ['error', {
      allowParens: true,
      onlyOneSimpleParam: false,
    }],


    /**
     * Disallow the use of `console`
     */
    'no-console': ['warn', {
      allow: [
        'error',
        'exception',
        'warn',
      ],
    }],


    /**
     * Disallow `continue` statements
     */
    'no-continue': ['error'],


    /**
     * Disallow deleting variables
     */
    'no-delete-var': ['error'],


    /**
     * Disallow division operators explicitly at the beginning of regular expressions
     */
    'no-div-regex': ['off'],


    /**
     * Disallow `else` blocks after `return` statements in `if` statements
     */
    'no-else-return': ['warn', {
      allowElseIf: false,
    }],


    /**
     * Disallow empty block statements
     */
    'no-empty': ['error'],


    /**
     * Disallow empty functions
     */
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
      ],
    }],


    /**
     * Disallow empty static blocks
     */
    'no-empty-static-block': ['error'],


    /**
     * Disallow `null` comparisons without type-checking operators
     */
    'no-eq-null': ['error'],


    /**
     * Disallow the use of `eval()`
     */
    'no-eval': ['error'],


    /**
     * Disallow extending native types
     */
    'no-extend-native': ['error'],


    /**
     * Disallow unnecessary calls to `.bind()`
     */
    'no-extra-bind': ['error'],


    /**
     * Disallow unnecessary boolean casts
     */
    'no-extra-boolean-cast': ['error'],


    /**
     * Disallow unnecessary labels
     */
    'no-extra-label': ['off'],


    /**
     * Disallow unnecessary semicolons
     */
    'no-extra-semi': ['warn'],


    /**
     * Disallow leading or trailing decimal points in numeric literals
     */
    'no-floating-decimal': ['error'],


    /**
     * Disallow assignments to native objects or read-only global variables
     */
    'no-global-assign': ['error'],


    /**
     * Disallow shorthand type conversions
     */
    'no-implicit-coercion': ['error', {
      disallowTemplateShorthand: true,
    }],


    /**
     * Disallow declarations in the global scope
     */
    'no-implicit-globals': ['error'],


    /**
     * Disallow the use of `eval()`-like methods
     */
    'no-implied-eval': ['error'],


    /**
     * Disallow inline comments after code
     */
    'no-inline-comments': ['off'],


    /**
     * Disallow use of `this` in contexts where the value of `this` is `undefined`
     */
    'no-invalid-this': ['error'],


    /**
     * Disallow the use of the `__iterator__` property
     */
    'no-iterator': ['error'],


    /**
     * Disallow labels that share a name with a variable
     */
    'no-label-var': ['off'],


    /**
     * Disallow labeled statements
     */
    'no-labels': ['error'],


    /**
     * Disallow unnecessary nested blocks
     */
    'no-lone-blocks': ['error'],


    /**
     * Disallow `if` statements as the only statement in `else` blocks
     */
    'no-lonely-if': ['warn'],


    /**
     * Disallow function declarations that contain unsafe references inside loop statements
     */
    'no-loop-func': ['error'],


    /**
     * Disallow magic numbers
     */
    'no-magic-numbers': ['warn', {
      ignore: [
        -1, // for decrement
        0, // for explicit length checks
        1, // for increment
        2, // for halving values
        24, // for time math
        60, // for time math
        100, // for currency math
        1000, // for time math
      ],
      enforceConst: true,
      ignoreDefaultValues: true,
      ignoreClassFieldInitialValues: true,
    }],


    /**
     * Disallow mixed binary operators
     *
     * Our justification for the current config is that logical and mathmatical expressions should be explicit in their intent.
     * By explicitly chunking out expressions, even when unnecessary, the code becomes easier to reason about and you're less prone to logic errors.
     */
    'no-mixed-operators': ['error', {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['/', '*'],
        ['&', '|', '^', '~', '<<', '>>', '>>>', '??'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<=', '??'],
        ['&&', '||', '??', '?:'],
        ['in', 'instanceof', '??'],
      ],
      allowSamePrecedence: false,
    }],


    /**
     * Disallow use of chained assignment expressions
     */
    'no-multi-assign': ['warn'],


    /**
     * Disallow multiline strings
     */
    'no-multi-str': ['error'],


    /**
     * Disallow negated conditions
     */
    'no-negated-condition': ['off'],


    /**
     * Disallow nested ternary expressions
     */
    'no-nested-ternary': ['warn'],


    /**
     * Disallow `new` operators outside of assignments or comparisons
     */
    'no-new': ['error'],


    /**
     * Disallow `new` operators with the `Function` object
     */
    'no-new-func': ['error'],


    /**
     * Disallow `Object` constructors
     */
    'no-new-object': ['error'],


    /**
     * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
     */
    'no-new-wrappers': ['error'],


    /**
     * Disallow `\8` and `\9` escape sequences in string literals
     */
    'no-nonoctal-decimal-escape': ['error'],


    /**
     * Disallow octal literals
     */
    'no-octal': ['error'],


    /**
     * Disallow octal escape sequences in string literals
     */
    'no-octal-escape': ['error'],


    /**
     * Disallow reassigning `function` parameters
     */
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsForRegex: [
        '^acc(umulator)?', // for Array.reduce() accumulators
        '^desc(riptor)?', // for ESNext decorators
        '^req(uest)?', // for Express requests
        '^res(ponse)?', // for Express responses
        '^draft(State)?', // for immer producers
      ],
      ignorePropertyModificationsFor: [
        'Component', // for React HOCs
        'connection', // alternative name for Koa ctx
        'ctx', // for Koa routing
        'target', // for ESNext decorators
        'client', // for Websocket servers
        'event', // for general events objects.
      ],
    }],


    /**
     * Disallow the unary operators `++` and `--`
     */
    'no-plusplus': ['error'],


    /**
     * Disallow the use of the `__proto__` property
     */
    'no-proto': ['error'],


    /**
     * Disallow variable redeclaration
     */
    'no-redeclare': ['error'],


    /**
     * Disallow multiple spaces in regular expressions
     */
    'no-regex-spaces': ['error'],


    /**
     * Disallow specified names in exports
     */
    'no-restricted-exports': ['off'],


    /**
     * Disallow specified global variables
     */
    'no-restricted-globals': ['error',
      {
        name: 'isFinite',
        message: 'Global `isFinite` is a flawed implementation. Use `Number.isFinite()` instead.',
      },
      {
        name: 'isNaN',
        message: 'Global `isNaN` is a flawed implementation. Use `Number.isNaN()` instead.',
      },
      ...confusingGlobals,
    ],


    /**
     * Disallow specified modules when loaded by `import`
     */
    'no-restricted-imports': ['off'],


    /**
     * Disallow certain properties on certain objects
     */
    'no-restricted-properties': ['off'],


    /**
     * Disallow specified syntax
     */
    'no-restricted-syntax': ['error',
      {
        selector: 'ForStatement',
        message: 'C-Style for loops are discouraged. Use array iteration (`arr.{forEach,map,reduce}`), a for-of loop, or a while loop instead.',
      },
      {
        selector: 'ForInStatement',
        message: '`for...in` loops iterate over the entire prototype chain, which may lead to unexpected behavior. Use array iteration (`arr.{forEach,map,reduce}`), a for...of loop, or a while loop instead.',
      },
      {
        selector: 'WithStatement',
        message: 'The `with` statement is forbidden in strict mode.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labeled statements are discouraged. They break the control flow of the program which makes code difficult to understand.',
      },
      {
        selector: 'BinaryExpression[operator=\'in\']',
        message: 'The `in` operator is discouraged because it is often the cause of unexpected behavior. Use `obj.isOwnProperty(value)` or `Reflect.has(obj, value)` instead.',
      },
    ],


    /**
     * Disallow assignment operators in `return` statements
     */
    'no-return-assign': ['error', 'always'],


    /**
     * Disallow unnecessary `return await`
     */
    'no-return-await': ['error'],


    /**
     * Disallow `javascript:` urls
     */
    'no-script-url': ['error'],


    /**
     * Disallow comma operators
     */
    'no-sequences': ['error', {
      allowInParentheses: false,
    }],


    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope
     */
    'no-shadow': ['error'],


    /**
     * Disallow identifiers from shadowing restricted names
     */
    'no-shadow-restricted-names': ['error'],


    /**
     * Disallow ternary operators
     */
    'no-ternary': ['off'],


    /**
     * Disallow throwing literals as exceptions
     */
    'no-throw-literal': ['error'],


    /**
     * Disallow initializing variables to `undefined`
     */
    'no-undef-init': ['off'],


    /**
     * Disallow the use of `undefined` as an identifier
     */
    'no-undefined': ['off'],


    /**
     * Disallow dangling underscores in identifiers
     */
    'no-underscore-dangle': ['off'],


    /**
     * Disallow ternary operators when simpler alternatives exist
     */
    'no-unneeded-ternary': ['warn', {
      defaultAssignment: false,
    }],


    /**
     * Disallow unused expressions
     */
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
      enforceForJSX: true,
    }],


    /**
     * Disallow unused labels
     */
    'no-unused-labels': ['off'],


    /**
     * Disallow unnecessary calls to `.call()` and `.apply()`
     */
    'no-useless-call': ['error'],


    /**
     * Disallow unnecessary `catch` clauses
     */
    'no-useless-catch': ['error'],


    /**
     * Disallow unnecessary computed property keys in objects and classes
     */
    'no-useless-computed-key': ['error'],


    /**
     * Disallow unnecessary concatenation of literals or template literals
     */
    'no-useless-concat': ['error'],


    /**
     * Disallow unnecessary constructors
     */
    'no-useless-constructor': ['error'],


    /**
     * Disallow unnecessary escape characters
     */
    'no-useless-escape': ['off'],


    /**
     * Disallow renaming import, export, and destructured assignments to the same name
     */
    'no-useless-rename': ['warn', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],


    /**
     * Disallow redundant return statements
     */
    'no-useless-return': ['error'],


    /**
     * Require `let` or `const` instead of `var`
     */
    'no-var': ['error'],


    /**
     * Disallow `void` operators
     */
    'no-void': ['error', {
      allowAsStatement: true,
    }],


    /**
     * Disallow specified warning terms in comments
     */
    'no-warning-comments': ['warn', {
      terms: ['todo', 'fixme'],
      location: 'start',
    }],


    /**
     * Disallow `with` statements
     */
    'no-with': ['error'],


    /**
     * Require or disallow method and property shorthand syntax for object literals
     */
    'object-shorthand': ['warn', 'always', {
      avoidQuotes: true,
      ignoreConstructors: false,
      avoidExplicitReturnArrows: false,
    }],


    /**
     * Enforce variables to be declared either together or separately in functions
     */
    'one-var': ['warn', 'never'],


    /**
     * Require or disallow newlines around variable declarations
     */
    'one-var-declaration-per-line': ['warn', 'always'],


    /**
     * Require or disallow assignment operator shorthand where possible
     */
    'operator-assignment': ['warn', 'always'],


    /**
     * Require using arrow functions for callbacks
     */
    'prefer-arrow-callback': ['warn', {
      allowNamedFunctions: false,
      allowUnboundThis: false,
    }],


    /**
     * Require `const` declarations for variables that are never reassigned after declared
     */
    'prefer-const': ['warn', {
      destructuring: 'all',
      ignoreReadBeforeAssign: true,
    }],


    /**
     * Require destructuring from arrays and/or objects
     */
    'prefer-destructuring': ['warn', {
      VariableDeclarator: {
        array: true,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],


    /**
     * Disallow the use of `Math.pow` in favor of the `**` operator
     */
    'prefer-exponentiation-operator': ['warn'],


    /**
     * Enforce using named capture group in regular expression
     */
    'prefer-named-capture-group': ['off'],


    /**
     * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
     */
    'prefer-numeric-literals': ['warn'],


    /**
     * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
     */
    'prefer-object-has-own': ['warn'],


    /**
     * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
     */
    'prefer-object-spread': ['warn'],


    /**
     * Require using Error objects as Promise rejection reasons
     */
    'prefer-promise-reject-errors': ['error', {
      allowEmptyReject: false,
    }],


    /**
     * Disallow use of the `RegExp` constructor in favor of regular expression literals
     */
    'prefer-regex-literals': ['warn'],


    /**
     * Require rest parameters instead of `arguments`
     */
    'prefer-rest-params': ['error'],


    /**
     * Require spread operators instead of `.apply()`
     */
    'prefer-spread': ['warn'],


    /**
     * Require template literals instead of string concatenation
     */
    'prefer-template': ['warn'],


    /**
     * Require quotes around object literal property names
     */
    'quote-props': ['warn', 'as-needed'],


    /**
     * Enforce the consistent use of the radix argument when using `parseInt()`
     */
    'radix': ['error'],


    /**
     * Disallow async functions which have no `await` expression
     */
    'require-await': ['error'],


    /**
     * Enforce the use of `u` flag on RegExp
     */
    'require-unicode-regexp': ['warn'],


    /**
     * Require generator functions to contain `yield`
     */
    'require-yield': ['error'],


    /**
     * Enforce sorted import declarations within modules
     */
    'sort-imports': ['off'],


    /**
     * Require object keys to be sorted
     */
    'sort-keys': ['off'],


    /**
     * Require variables within the same declaration block to be sorted
     */
    'sort-vars': ['off'],


    /**
     * Enforce consistent spacing after the `//` or `/*` in a comment
     */
    'spaced-comment': ['warn', 'always', {
      line: {
        exceptions: [],
        markers: [
          '/', // for d.ts triple-slash directives
        ],
      },
      block: {
        exceptions: [],
        markers: [
          '*', // for JSDoc Blocks
          '**', // for special JSDoc rule exception.
        ],
        balanced: true,
      },
    }],


    /**
     * Require or disallow strict mode directives
     */
    'strict': ['off'],


    /**
     * Require symbol descriptions
     */
    'symbol-description': ['error'],


    /**
     * Require `var` declarations be placed at the top of their containing scope
     */
    'vars-on-top': ['warn'],


    /**
     * Require or disallow "Yoda" conditions
     */
    'yoda': ['warn'],
  },
} as const
