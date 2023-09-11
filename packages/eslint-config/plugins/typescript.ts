export = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    /**
     * Require that function overload signatures be consecutive
     */
    '@typescript-eslint/adjacent-overload-signatures': ['warn'],


    /**
     * Require consistently using either T[] or Array<T> for arrays
     */
    '@typescript-eslint/array-type': ['warn', {
      default: 'array',
    }],


    /**
     * Disallow awaiting a value that is not a Thenable
     */
    '@typescript-eslint/await-thenable': ['error'],


    /**
     * Disallow @ts-<directive> comments or require descriptions after directives
     */
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': 'allow-with-description',
      'ts-check': false,
      'minimumDescriptionLength': 10,
    }],


    /**
     * Disallow // tslint:<rule-flag> comments
     */
    '@typescript-eslint/ban-tslint-comment': ['warn'],


    /**
     * Disallow certain types
     */
    '@typescript-eslint/ban-types': ['error', {
      extendDefaults: true,
      types: {
        '{}': false, // this type is used far too commonly in React
      },
    }],


    /**
     * Enforce that literals on classes are exposed in a consistent style
     */
    '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],


    /**
     * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
     */
    '@typescript-eslint/consistent-generic-constructors': ['warn'],


    /**
     * Require or disallow the Record type
     */
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],


    /**
     * Enforce consistent usage of type assertions
     */
    '@typescript-eslint/consistent-type-assertions': ['warn', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow',
    }],


    /**
     * Enforce type definitions to consistently use either interface or type
     */
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],


    /**
     * Enforce consistent usage of type exports
     */
    '@typescript-eslint/consistent-type-exports': ['off'],


    /**
     * Enforce consistent usage of type imports
     */
    '@typescript-eslint/consistent-type-imports': ['off'],


    /**
     * Require a specific member delimiter style for interfaces and type literals
     */
    '@typescript-eslint/member-delimiter-style': ['warn', {
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
    '@typescript-eslint/member-ordering': ['warn', {
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
        'abstract-method',

        'method',
      ],
    }],


    /**
     * Enforce using a particular method signature syntax
     */
    '@typescript-eslint/method-signature-style': ['warn', 'property'],


    /**
     * Enforce naming conventions for everything across a codebase
     */
    'camelcase': ['off'],
    '@typescript-eslint/naming-convention': ['off'],


    /**
     * Require .toString() to only be called on objects which provide useful information when stringified
     */
    '@typescript-eslint/no-base-to-string': ['error'],


    /**
     * Disallow non-null assertion in locations that may be confusing
     */
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],


    /**
     * Require expressions of type void to appear in statement position
     */
    '@typescript-eslint/no-confusing-void-expression': ['error', {
      ignoreArrowShorthand: true,
    }],


    /**
     * Disallow duplicate enum member values
     */
    '@typescript-eslint/no-duplicate-enum-values': ['error'],


    /**
     * Disallow using the delete operator on computed key expressions
     */
    '@typescript-eslint/no-dynamic-delete': ['off'],


    /**
     * Disallow the declaration of empty interfaces
     */
    '@typescript-eslint/no-empty-interface': ['error'],


    /**
     * Disallow the any type
     */
    '@typescript-eslint/no-explicit-any': ['off'],


    /**
     * Disallow extra non-null assertions
     */
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],


    /**
     * Disallow classes used as namespaces
     */
    '@typescript-eslint/no-extraneous-class': ['off'],


    /**
     * Require Promise-like statements to be handled appropriately
     */
    '@typescript-eslint/no-floating-promises': ['error', {
      ignoreVoid: true,
      ignoreIIFE: true,
    }],


    /**
     * Disallow iterating over an array with a for-in loop
     */
    '@typescript-eslint/no-for-in-array': ['off'],


    /**
     * Disallow usage of the implicit any type in catch clauses
     */
    '@typescript-eslint/no-implicit-any-catch': ['off'],


    /**
     * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
     */
    '@typescript-eslint/no-import-type-side-effects': ['off'],


    /**
     * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
     */
    '@typescript-eslint/no-inferrable-types': ['warn'],


    /**
     * Disallow void type outside of generic or return types
     */
    '@typescript-eslint/no-invalid-void-type': ['error'],


    /**
     * Disallow the void operator except when used to discard a value
     */
    '@typescript-eslint/no-meaningless-void-operator': ['error'],


    /**
     * Enforce valid definition of new and constructor
     */
    '@typescript-eslint/no-misused-new': ['error'],


    /**
     * Disallow Promises in places not designed to handle them
     */
    '@typescript-eslint/no-misused-promises': ['error'],


    /**
     * Disallow TypeScript namespaces
     */
    '@typescript-eslint/no-namespace': ['error'],


    /**
     * Disallow non-null assertions in the left operand of a nullish coalescing operator
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],


    /**
     * Disallow non-null assertions after an optional chain expression
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],


    /**
     * Disallow non-null assertions using the ! postfix operator
     */
    '@typescript-eslint/no-non-null-assertion': ['error'],


    /**
     * Disallow members of unions and intersections that do nothing or override type information
     */
    '@typescript-eslint/no-redundant-type-constituents': ['error'],


    /**
     * Disallow aliasing this
     */
    '@typescript-eslint/no-this-alias': ['error', {
      allowDestructuring: true,
    }],


    /**
     * Disallow type aliases
     */
    '@typescript-eslint/no-type-alias': ['off'],


    /**
     * Disallow unnecessary equality comparisons against boolean literals
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['off'],


    /**
     * Disallow conditionals where the type is always truthy or always falsy
     */
    '@typescript-eslint/no-unnecessary-condition': ['warn'],


    /**
     * Disallow unnecessary namespace qualifiers
     */
    '@typescript-eslint/no-unnecessary-qualifier': ['warn'],


    /**
     * Disallow type arguments that are equal to the default
     */
    '@typescript-eslint/no-unnecessary-type-arguments': ['warn'],


    /**
     * Disallow type assertions that do not change the type of an expression
     */
    '@typescript-eslint/no-unnecessary-type-assertion': ['warn'],


    /**
     * Disallow unnecessary constraints on generic types
     */
    '@typescript-eslint/no-unnecessary-type-constraint': ['warn'],


    /**
     * Disallow calling a function with a value with type any
     */
    '@typescript-eslint/no-unsafe-argument': ['error'],


    /**
     * Disallow assigning a value with type any to variables and properties
     */
    '@typescript-eslint/no-unsafe-assignment': ['off'],


    /**
     * Disallow calling a value with type any
     */
    '@typescript-eslint/no-unsafe-call': ['error'],


    /**
     * Disallow unsafe declaration merging
     */
    '@typescript-eslint/no-unsafe-declaration-merging': ['error'],


    /**
     * Disallow member access on a value with type any
     */
    '@typescript-eslint/no-unsafe-member-access': ['off'],


    /**
     * Disallow returning a value with type any from a function
     */
    '@typescript-eslint/no-unsafe-return': ['off'],


    /**
     * Disallow empty exports that don't change anything in a module file
     */
    '@typescript-eslint/no-useless-empty-export': ['error'],


    /**
     * Disallow require statements except in import statements
     */
    '@typescript-eslint/no-var-requires': ['off'],


    /**
     * Enforce non-null assertions over explicit type casts
     */
    '@typescript-eslint/non-nullable-type-assertion-style': ['off'],


    /**
     * Require or disallow parameter properties in class constructors
     */
    '@typescript-eslint/parameter-properties': ['off'],


    /**
     * Enforce the use of as const over literal type
     */
    '@typescript-eslint/prefer-as-const': ['warn'],


    /**
     * Require each enum member value to be explicitly initialized
     */
    '@typescript-eslint/prefer-enum-initializers': ['warn'],


    /**
     * Enforce the use of for-of loop over the standard for loop where possible
     */
    '@typescript-eslint/prefer-for-of': ['off'],


    /**
     * Enforce using function types instead of interfaces with call signatures
     */
    '@typescript-eslint/prefer-function-type': ['warn'],


    /**
     * Enforce includes method over indexOf method
     */
    '@typescript-eslint/prefer-includes': ['warn'],


    /**
     * Require all enum members to be literal values
     */
    '@typescript-eslint/prefer-literal-enum-member': ['error'],


    /**
     * Require using namespace keyword over module keyword to declare custom TypeScript modules
     */
    '@typescript-eslint/prefer-namespace-keyword': ['off'],


    /**
     * Enforce using the nullish coalescing operator instead of logical chaining
     */
    '@typescript-eslint/prefer-nullish-coalescing': ['warn'],


    /**
     * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
     */
    '@typescript-eslint/prefer-optional-chain': ['warn'],


    /**
     * Require private members to be marked as readonly if they're never modified outside of the constructor
     */
    '@typescript-eslint/prefer-readonly': ['warn'],


    /**
     * Require function parameters to be typed as readonly to prevent accidental mutation of inputs
     */
    '@typescript-eslint/prefer-readonly-parameter-types': ['off'],


    /**
     * Enforce using type parameter when calling Array#reduce instead of casting
     */
    '@typescript-eslint/prefer-reduce-type-parameter': ['warn'],


    /**
     * Enforce RegExp#exec over String#match if no global flag is provided
     */
    '@typescript-eslint/prefer-regexp-exec': ['error'],


    /**
     * Enforce that this is used when only this type is returned
     */
    '@typescript-eslint/prefer-return-this-type': ['warn'],


    /**
     * Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings
     */
    '@typescript-eslint/prefer-string-starts-ends-with': ['warn'],


    /**
     * Enforce using @ts-expect-error over @ts-ignore
     */
    '@typescript-eslint/prefer-ts-expect-error': ['error'],


    /**
     * Require any function or method that returns a Promise to be marked async
     */
    '@typescript-eslint/promise-function-async': ['error'],


    /**
     * Require Array#sort calls to always provide a compareFunction
     */
    '@typescript-eslint/require-array-sort-compare': ['error', {
      ignoreStringArrays: true,
    }],


    /**
     * Require both operands of addition to be the same type and be bigint, number, or string
     */
    '@typescript-eslint/restrict-plus-operands': ['error'],


    /**
     * Enforce template literal expressions to be of string type
     */
    '@typescript-eslint/restrict-template-expressions': ['off'],


    /**
     * Enforce constituents of a type union/intersection to be sorted alphabetically
     */
    '@typescript-eslint/sort-type-constituents': ['warn'],


    /**
     * Enforce members of a type union/intersection to be sorted alphabetically
     */
    '@typescript-eslint/sort-type-union-intersection-members': ['warn'],


    /**
     * Disallow certain types in boolean expressions
     */
    '@typescript-eslint/strict-boolean-expressions': ['off'],


    /**
     * Require switch-case statements to be exhaustive with union type
     */
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],


    /**
     * Disallow certain triple slash directives in favor of ES6-style import declarations
     */
    '@typescript-eslint/triple-slash-reference': ['off'],


    /**
     * Require consistent spacing around type annotations
     */
    '@typescript-eslint/type-annotation-spacing': ['warn'],


    /**
     * Require type annotations in certain places
     */
    '@typescript-eslint/typedef': ['off'],


    /**
     * Enforce unbound methods are called with their expected scope
     */
    '@typescript-eslint/unbound-method': ['error', {
      ignoreStatic: true,
    }],


    /**
     * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
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
        '@typescript-eslint/explicit-function-return-type': ['off'],


        /**
         * Require explicit accessibility modifiers on class properties and methods
         */
        '@typescript-eslint/explicit-member-accessibility': ['warn', {
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
        '@typescript-eslint/explicit-module-boundary-types': ['off'],


        /**
         * Disallows invocation of require()
         */
        '@typescript-eslint/no-require-imports': ['error'],
      },
    },
  ],
} as const
