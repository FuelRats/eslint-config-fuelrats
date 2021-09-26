/* eslint-disable id-length */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    /**
     * Require that member overloads be consecutive
     */
    '@typescript-eslint/adjacent-overload-signatures': ['error'],


    /**
     * Requires using either T[] or Array<T> for arrays
     */
    '@typescript-eslint/array-type': ['error', {
      default: 'array',
    }],


    /**
     * Disallows awaiting a value that is not a Thenable
     */
    '@typescript-eslint/await-thenable': ['error'],


    /**
     * Bans @ts-<directive> comments from being used or requires descriptions after directive
     */
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description',
      'ts-check': 'allow-with-description',
      'minimumDescriptionLength': 10,
    }],


    /**
     * Bans // tslint:<rule-flag> comments from being used
     */
    '@typescript-eslint/ban-tslint-comment': ['warn'],


    /**
     * Bans specific types from being used
     */
    '@typescript-eslint/ban-types': ['error'],


    /**
     * Ensures that literals on classes are exposed in a consistent style
     */
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],


    /**
     * Enforce or disallow the use of the record type
     */
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],


    /**
     * Enforces consistent usage of type assertions
     */
    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never',
    }],


    /**
     * Consistent with type definition either interface or type
     */
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],


    /**
     * Enforces consistent usage of type imports
     *
     * DISABLED: `import type` can be used to get around no-extraneous-dependencies
     */
    '@typescript-eslint/consistent-type-imports': ['off', {
      prefer: 'no-type-imports',
      disallowTypeAnnotations: true,
    }],


    /**
     * Require a specific member delimiter style for interfaces and type literals
     */
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }],


    /**
     * Require a consistent member declaration order
     */
    '@typescript-eslint/member-ordering': ['error', {
      default: [
        // Index signature
        'signature',

        // Fields
        'public-static-field',
        'protected-static-field',
        'private-static-field',
        'static-field',

        'public-field',
        'protected-field',
        'private-field',

        'public-abstract-field',
        'protected-abstract-field',
        'private-abstract-field',
        'abstract-field',

        'field',

        // Constructors
        'public-constructor',
        'protected-constructor',
        'private-constructor',
        'constructor',

        // Methods
        'public-static-method',
        'protected-static-method',
        'private-static-method',

        'public-method',
        'protected-method',
        'private-method',

        'public-abstract-method',
        'protected-abstract-method',
        'private-abstract-method',
        'abstract-method',

        'method',
      ],
    }],


    /**
     * Enforces using a particular method signature syntax.
     */
    '@typescript-eslint/method-signature-style': ['error', 'property'],


    /**
     * Enforces naming conventions for everything across a codebase
     *
     * Also disable camelcase here since naming-convention replaces it's job.
     *
     * TODO: test this against an existing TS codebase and adjust accordingly
     */
    'camelcase': ['off'],
    '@typescript-eslint/naming-convention': ['error',
      {
        selector: 'default',
        format: ['camelCase'],
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        modifiers: ['global'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],


    /**
     * Requires that .toString() is only called on objects which provide useful information when stringified
     */
    '@typescript-eslint/no-base-to-string': ['error'],


    /**
     * Disallow non-null assertion in locations that may be confusing
     */
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],


    /**
     * Requires expressions of type void to appear in statement position
     */
    '@typescript-eslint/no-confusing-void-expression': ['error', {
      ignoreArrowShorthand: true,
    }],


    /**
     * Disallow the delete operator with computed key expressions
     */
    '@typescript-eslint/no-dynamic-delete': ['error'],


    /**
     * Disallow the declaration of empty interfaces
     */
    '@typescript-eslint/no-empty-interface': ['error'],


    /**
     * Disallow usage of the any type
     */
    '@typescript-eslint/no-explicit-any': ['off'],


    /**
     * Disallow extra non-null assertion
     */
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],


    /**
     * Forbids the use of classes as namespaces
     */
    '@typescript-eslint/no-extraneous-class': ['off'],


    /**
     * Requires Promise-like values to be handled appropriately
     */
    '@typescript-eslint/no-floating-promises': ['error', {
      ignoreVoid: true,
      ignoreIIFE: true,
    }],


    /**
     * Disallow iterating over an array with a for-in loop
     *
     * DISABLED: existing no-restricted-syntax rule prohibits for-in with better feedback.
     */
    '@typescript-eslint/no-for-in-array': ['off'],


    /**
     * Disallow usage of the implicit any type in catch clauses
     *
     * DISABLED: Since 4.4 catch variables can be implicity typed as unknown, making this a moot rule.
     */
    '@typescript-eslint/no-implicit-any-catch': ['off'],


    /**
     * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
     */
    '@typescript-eslint/no-inferrable-types': ['error'],


    /**
     * Disallows usage of void type outside of generic or return types
     */
    '@typescript-eslint/no-invalid-void-type': ['error'],


    /**
     * Enforce valid definition of new and constructor
     */
    '@typescript-eslint/no-misused-new': ['error'],


    /**
     * Avoid using promises in places not designed to handle them
     */
    '@typescript-eslint/no-misused-promises': ['error'],


    /**
     * Disallow the use of custom TypeScript modules and namespaces
     */
    '@typescript-eslint/no-namespace': ['error'],


    /**
     * Disallows using a non-null assertion after an optional chain expression
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],


    /**
     * Disallows non-null assertions using the ! postfix operator
     */
    '@typescript-eslint/no-non-null-assertion': ['error'],


    /**
     * Disallow the use of parameter properties in class constructors
     */
    '@typescript-eslint/no-parameter-properties': ['off'],


    /**
     * Disallow aliasing this
     */
    '@typescript-eslint/no-this-alias': ['error', {
      allowDestructuring: true,
    }],


    /**
     * Disallow the use of type aliases
     */
    '@typescript-eslint/no-type-alias': ['error', {
      allowAliases: 'always',
      allowCallbacks: 'always',
      allowConditionalTypes: 'always',
      allowConstructors: 'never',
      allowLiterals: 'in-unions-and-intersections',
      allowMappedTypes: 'always',
      allowTupleTypes: 'always',
    }],


    /**
     * Flags unnecessary equality comparisons against boolean literals
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['off'],


    /**
     * Prevents conditionals where the type is always truthy or always falsy
     */
    '@typescript-eslint/no-unnecessary-condition': ['error'],


    /**
     * Warns when a namespace qualifier is unnecessary
     */
    '@typescript-eslint/no-unnecessary-qualifier': ['error'],


    /**
     * Enforces that type arguments will not be used if not required
     */
    '@typescript-eslint/no-unnecessary-type-arguments': ['error'],


    /**
     * Warns if a type assertion does not change the type of an expression
     */
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],


    /**
     * Disallows unnecessary constraints on generic types
     */
    '@typescript-eslint/no-unnecessary-type-constraint': ['error'],


    /**
     * Disallows calling an function with an any type value
     */
    '@typescript-eslint/no-unsafe-argument': ['error'],


    /**
     * Disallows assigning any to variables and properties
     */
    '@typescript-eslint/no-unsafe-assignment': ['off'],


    /**
     * Disallows calling an any type value
     */
    '@typescript-eslint/no-unsafe-call': ['error'],


    /**
     * Disallows member access on any typed variables
     */
    '@typescript-eslint/no-unsafe-member-access': ['off'],


    /**
     * Disallows returning any from a function
     */
    '@typescript-eslint/no-unsafe-return': ['off'],


    /**
     * Disallows the use of require statements except in import statements
     *
     * DISABLED: handled by other import style rules.
     */
    '@typescript-eslint/no-var-requires': ['off'],


    /**
     * Prefers a non-null assertion over explicit type cast when possible
     */
    '@typescript-eslint/non-nullable-type-assertion-style': ['off'],


    /**
     * Prefer usage of as const over literal type
     */
    '@typescript-eslint/prefer-as-const': ['error'],


    /**
     * Prefer initializing each enums member value
     */
    '@typescript-eslint/prefer-enum-initializers': ['error'],


    /**
     * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
     *
     * DISABLED: Handled by no-restricted-syntax with better reasoning.
     */
    '@typescript-eslint/prefer-for-of': ['off'],


    /**
     * Use function types instead of interfaces with call signatures
     */
    '@typescript-eslint/prefer-function-type': ['error'],


    /**
     * Enforce includes method over indexOf method
     */
    '@typescript-eslint/prefer-includes': ['error'],


    /**
     * Require that all enum members be literal values to prevent unintended enum member name shadow issues
     */
    '@typescript-eslint/prefer-literal-enum-member': ['error'],


    /**
     * Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
     */
    '@typescript-eslint/prefer-namespace-keyword': ['off'],


    /**
     * Enforce the usage of the nullish coalescing operator instead of logical chaining
     */
    '@typescript-eslint/prefer-nullish-coalescing': ['error'],


    /**
     * Prefer using concise optional chain expressions instead of chained logical ands
     */
    '@typescript-eslint/prefer-optional-chain': ['error'],


    /**
     * Requires that private members are marked as readonly if they're never modified outside of the constructor
     */
    '@typescript-eslint/prefer-readonly': ['error'],


    /**
     * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
     */
    '@typescript-eslint/prefer-readonly-parameter-types': ['off'],


    /**
     * Prefer using type parameter when calling Array#reduce instead of casting
     */
    '@typescript-eslint/prefer-reduce-type-parameter': ['error'],


    /**
     * Enforce that RegExp#exec is used instead of String#match if no global flag is provided
     */
    '@typescript-eslint/prefer-regexp-exec': ['error'],


    /**
     * Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
     */
    '@typescript-eslint/prefer-string-starts-ends-with': ['error'],


    /**
     * Recommends using @ts-expect-error over @ts-ignore
     */
    '@typescript-eslint/prefer-ts-expect-error': ['error'],


    /**
     * Requires any function or method that returns a Promise to be marked async
     */
    '@typescript-eslint/promise-function-async': ['error'],


    /**
     * Requires Array#sort calls to always provide a compareFunction
     */
    '@typescript-eslint/require-array-sort-compare': ['error', {
      ignoreStringArrays: true,
    }],


    /**
     * When adding two variables, operands must both be of type number or of type string
     */
    '@typescript-eslint/restrict-plus-operands': ['error'],


    /**
     * Enforce template literal expressions to be of string type
     */
    '@typescript-eslint/restrict-template-expressions': ['off'],


    /**
     * Enforces that members of a type union/intersection are sorted alphabetically
     */
    '@typescript-eslint/sort-type-union-intersection-members': ['error'],


    /**
     * Restricts the types allowed in boolean expressions
     */
    '@typescript-eslint/strict-boolean-expressions': ['off'],


    /**
     * Exhaustiveness checking in switch with union type
     */
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],


    /**
     * Sets preference level for triple slash directives versus ES6-style import declarations
     */
    '@typescript-eslint/triple-slash-reference': ['off'],


    /**
     * Require consistent spacing around type annotations
     */
    '@typescript-eslint/type-annotation-spacing': ['error'],


    /**
     * Requires type annotations to exist
     */
    '@typescript-eslint/typedef': ['off'],


    /**
     * Enforces unbound methods are called with their expected scope
     */
    '@typescript-eslint/unbound-method': ['error', {
      ignoreStatic: true,
    }],


    /**
     * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
     */
    '@typescript-eslint/unified-signatures': ['error'],
  },
  overrides: [
    {
      /**
       * The following rules are only active in .ts files to support mixed codebases.
       */
      files: ['*.ts', '*.tsx'],
      rules: {
        /**
         * Require explicit return types on functions and class methods
         */
        '@typescript-eslint/explicit-function-return-type': ['error'],

        /**
         * Require explicit accessibility modifiers on class properties and methods
         */
        '@typescript-eslint/explicit-member-accessibility': ['error', {
          accessibility: 'explicit',
          overrides: {
            accessors: 'explicit',
            constructors: 'no-public',
            methods: 'explicit',
            properties: 'explicit',
            parameterProperties: 'no-public',
          },
        }],

        /**
         * Require explicit return and argument types on exported functions' and classes' public class methods
         */
        '@typescript-eslint/explicit-module-boundary-types': ['error', {
          allowArgumentsExplicitlyTypedAsAny: true,
          allowDirectConstAssertionInArrowFunctions: false,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
        }],

        /**
         * Disallows invocation of require()
         */
        '@typescript-eslint/no-require-imports': ['error'],
      },
    },
  ],
}
