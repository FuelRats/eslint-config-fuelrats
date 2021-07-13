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
    '@typescript-eslint/array-type': ['error', 'array'],


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
     */
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'no-type-imports',
      objectLiteralTypeAssertions: true,
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
        format: ['strictCamelCase'],
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        modifiers: ['global'],
        format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: 'function',
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
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
     */
    '@typescript-eslint/no-implicit-any-catch': ['error'],


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
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-misused-new': ['off'],


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
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],


    /**
     * Disallows non-null assertions using the ! postfix operator
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-non-null-assertion': ['off'],


    /**
     * Disallow the use of parameter properties in class constructors
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-parameter-properties': ['off'],


    /**
     * Disallows invocation of require()
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-require-imports': ['off'],


    /**
     * Disallow aliasing this
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-this-alias': ['off'],


    /**
     * Disallow the use of type aliases
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-type-alias': ['off'],


    /**
     * Flags unnecessary equality comparisons against boolean literals
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['off'],


    /**
     * Prevents conditionals where the type is always truthy or always falsy
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-unnecessary-condition': ['off'],


    /**
     * Warns when a namespace qualifier is unnecessary
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-unnecessary-qualifier': ['off'],


    /**
     * Enforces that type arguments will not be used if not required
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-unnecessary-type-arguments': ['off'],


    /**
     * Warns if a type assertion does not change the type of an expression
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-unnecessary-type-assertion': ['off'],


    /**
     * Disallows unnecessary constraints on generic types
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-unnecessary-type-constraint': ['off'],


    /**
     * Disallows calling an function with an any type value
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-unsafe-argument': ['off'],


    /**
     * Disallows assigning any to variables and properties
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-unsafe-assignment': ['off'],


    /**
     * Disallows calling an any type value
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-unsafe-call': ['off'],


    /**
     * Disallows member access on any typed variables
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-unsafe-member-access': ['off'],


    /**
     * Disallows returning any from a function
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-unsafe-return': ['off'],


    /**
     * Disallows the use of require statements except in import statements
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/no-var-requires': ['off'],


    /**
     * Prefers a non-null assertion over explicit type cast when possible
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/non-nullable-type-assertion-style': ['off'],


    /**
     * Prefer usage of as const over literal type
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-as-const': ['off'],


    /**
     * Prefer initializing each enums member value
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-enum-initializers': ['off'],


    /**
     * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-for-of': ['off'],


    /**
     * Use function types instead of interfaces with call signatures
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-function-type': ['off'],


    /**
     * Enforce includes method over indexOf method
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-includes': ['off'],


    /**
     * Require that all enum members be literal values to prevent unintended enum member name shadow issues
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-literal-enum-member': ['off'],


    /**
     * Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-namespace-keyword': ['off'],


    /**
     * Enforce the usage of the nullish coalescing operator instead of logical chaining
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-nullish-coalescing': ['off'],


    /**
     * Prefer using concise optional chain expressions instead of chained logical ands
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-optional-chain': ['off'],


    /**
     * Requires that private members are marked as readonly if they're never modified outside of the constructor
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-readonly': ['off'],


    /**
     * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-readonly-parameter-types': ['off'],


    /**
     * Prefer using type parameter when calling Array#reduce instead of casting
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-reduce-type-parameter': ['off'],


    /**
     * Enforce that RegExp#exec is used instead of String#match if no global flag is provided
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-regexp-exec': ['off'],


    /**
     * Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-string-starts-ends-with': ['off'],


    /**
     * Recommends using @ts-expect-error over @ts-ignore
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/prefer-ts-expect-error': ['off'],


    /**
     * Requires any function or method that returns a Promise to be marked async
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/promise-function-async': ['off'],


    /**
     * Requires Array#sort calls to always provide a compareFunction
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/require-array-sort-compare': ['off'],


    /**
     * When adding two variables, operands must both be of type number or of type string
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/restrict-plus-operands': ['off'],


    /**
     * Enforce template literal expressions to be of string type
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/restrict-template-expressions': ['off'],


    /**
     * Enforces that members of a type union/intersection are sorted alphabetically
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/sort-type-union-intersection-members': ['off'],


    /**
     * Restricts the types allowed in boolean expressions
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/strict-boolean-expressions': ['off'],


    /**
     * Exhaustiveness checking in switch with union type
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/switch-exhaustiveness-check': ['off'],


    /**
     * Sets preference level for triple slash directives versus ES6-style import declarations
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/triple-slash-reference': ['off'],


    /**
     * Require consistent spacing around type annotations
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/type-annotation-spacing': ['off'],


    /**
     * Requires type annotations to exist
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/typedef': ['off'],


    /**
     * Enforces unbound methods are called with their expected scope
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/unbound-method': ['off'],


    /**
     * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
     *
     * TODO: Configure Rule
     */
    '@typescript-eslint/unified-signatures': ['off'],
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
      },
    },
  ],
}
