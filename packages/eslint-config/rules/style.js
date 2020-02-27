module.exports = {
  rules: {
    /**
     * enforce linebreaks after opening and before closing array brackets
     *
     * _DISABLED: Unable to enforce consistent behavior with objects, therefore we prefer to leave this off so as to not enforce inconsistency_
     */
    'array-bracket-newline': ['off'],


    /**
     * enforce consistent spacing inside array brackets
     */
    'array-bracket-spacing': ['error', 'never'],


    /**
     * enforce line breaks after each array element
     *
     * _DISABLED: Unable to enforce consistent behavior with objects, therefore we prefer to leave this off so as to not enforce inconsistency_
     */
    'array-element-newline': ['off'],


    /**
     * disallow or enforce spaces inside of blocks after opening block and before closing block
     */
    'block-spacing': ['error', 'always'],


    /**
     * enforce consistent brace style for blocks
     */
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false,
    }],


    /**
     * enforce camelcase naming convention
     */
    'camelcase': ['error', {
      properties: 'never',
      ignoreDestructuring: false,
      allow: [
        '^UNSAFE_', // for unsafe React lifecycle methods
      ],
    }],


    /**
     * enforce or disallow capitalization of the first letter of a comment
     */
    'capitalized-comments': ['off'],


    /**
     * require or disallow trailing commas
     */
    'comma-dangle': ['error', 'always-multiline'],


    /**
     * enforce consistent spacing before and after commas
     */
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],


    /**
     * enforce consistent comma style
     */
    'comma-style': ['error', 'last', {
      exceptions: { // NO EXCEPTIONS
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],


    /**
     * enforce consistent spacing inside computed property brackets
     */
    'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],


    /**
     * enforce consistent naming when capturing the current execution context
     */
    'consistent-this': ['error', 'self'],


    /**
     * require or disallow newline at the end of files
     */
    'eol-last': ['error', 'always'],


    /**
     * require or disallow spacing between function identifiers and their invocations
     */
    'func-call-spacing': ['error', 'never'],


    /**
     * require function names to match the name of the variable or property to which they are assigned
     */
    'func-name-matching': ['error', 'always', {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: true,
    }],


    /**
     * require or disallow named function expressions
     */
    'func-names': ['error', 'always', {
      generators: 'always',
    }],


    /**
     * enforce the consistent use of either function declarations or expressions
     */
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true,
    }],


    /**
     * enforce line breaks between arguments of a function call
     */
    'function-call-argument-newline': ['error', 'consistent'],


    /**
     * enforce consistent line breaks inside function parentheses
     */
    'function-paren-newline': ['error', 'consistent'],


    /**
     * disallow specified identifiers
     */
    'id-blacklist': ['off'],


    /**
     * enforce minimum and maximum identifier lengths
     */
    'id-length': ['error', {
      min: 2,
      max: 35,
      exceptions: [
        '_',
      ],
    }],


    /**
     * require identifiers to match a specified regular expression
     */
    'id-match': ['off'],


    /**
     * enforce the location of arrow function bodies
     */
    'implicit-arrow-linebreak': ['error', 'beside'],


    /**
     * enforce consistent indentation
     */
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3,
      },
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: true,

      // list derived from https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L143,
      // which was derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js,
      ignoredNodes: [
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
      ],
      ignoreComments: false,
    }],


    /**
     * enforce the consistent use of either double or single quotes in JSX attributes
     */
    'jsx-quotes': ['error', 'prefer-double'],


    /**
     * enforce consistent spacing between keys and values in object literal properties
     */
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],


    /**
     * enforce consistent spacing before and after keywords
     */
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],


    /**
     * enforce position of line comments
     */
    'line-comment-position': ['off'],


    /**
     * enforce consistent linebreak style
     */
    'linebreak-style': ['error', 'unix'],


    /**
     * require empty lines around comments
     */
    'lines-around-comment': ['off'],


    /**
     * require or disallow an empty line between class members
     */
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],


    /**
     * enforce a maximum depth that blocks can be nested
     */
    'max-depth': ['error', 6],


    /**
     * enforce a maximum line length
     */
    'max-len': ['error', 180],


    /**
     * enforce a maximum number of lines per file
     */
    'max-lines': ['error', 999],


    /**
     * enforce a maximum number of line of code in a function
     *
     * _DISABLED: we prefer to judge function length by statements instead of a hard limit on lines used_
     */
    'max-lines-per-function': ['off'],


    /**
     * enforce a maximum depth that callbacks can be nested
     */
    'max-nested-callbacks': ['error', 5],


    /**
     * enforce a maximum number of parameters in function definitions
     *
     * tip: use objects to pass parameters instead
     */
    'max-params': ['error', 5],


    /**
     * enforce a maximum number of statements allowed in function blocks
     */
    'max-statements': ['error', 50],


    /**
     * enforce a maximum number of statements allowed per line
     */
    'max-statements-per-line': ['error', {
      max: 1,
    }],


    /**
     * enforce a particular style for multiline comments
     */
    'multiline-comment-style': ['off'],


    /**
     * enforce newlines between operands of ternary expressions
     */
    'multiline-ternary': ['error', 'always-multiline'],


    /**
     * require constructor names to begin with a capital letter
     */
    'new-cap': ['error', {
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
     * require parentheses when invoking a constructor with no arguments
     */
    'new-parens': ['error'],


    /**
     * require a newline after each call in a method chain
     */
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 4,
    }],


    /**
     * disallow Array constructors
     */
    'no-array-constructor': ['error'],


    /**
     * disallow bitwise operators
     */
    'no-bitwise': ['error'],


    /**
     * disallow continue statements
     */
    'no-continue': ['error'],


    /**
     * disallow inline comments after code
     */
    'no-inline-comments': ['off'],


    /**
     * disallow if statements as the only statement in else blocks
     */
    'no-lonely-if': ['error'],


    /**
     * disallow mixed binary operators
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
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    }],


    /**
     * disallow mixed spaces and tabs for indentation
     */
    'no-mixed-spaces-and-tabs': ['error'],


    /**
     * disallow use of chained assignment expressions
     */
    'no-multi-assign': ['error'],


    /**
     * disallow multiple empty lines
     */
    'no-multiple-empty-lines': ['error', {
      max: 5,
      maxBOF: 0,
      maxEOF: 1,
    }],


    /**
     * disallow negated conditions
     */
    'no-negated-condition': ['error'],


    /**
     * disallow nested ternary expressions
     */
    'no-nested-ternary': ['error'],


    /**
     * disallow Object constructors
     */
    'no-new-object': ['error'],


    /**
     * disallow the unary operators ++ and --
     */
    'no-plusplus': ['error'],


    /**
     * disallow specified syntax
     */
    'no-restricted-syntax': ['error',
      {
        selector: 'ForStatement',
        message: 'C-Style for loops are disallowed, consider using a higher-order array function like map/filter/reduce, a for-of statement, or a while loop.',
      },
      {
        selector: 'WithStatement',
        message: 'Use of the WITH statement is deprecated in ES5 and generally discouraged due to unpredictable behaviour.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labeled statements are considered harmful as they break the control flow of the program and makes the behaviour of code unpredictable and difficult to understand.',
      },
      {
        selector: 'BinaryExpression[operator=\'in\']',
        message: 'The In operator can cause problematic behavior. Use Obj.isOwnProperty() or Reflect.has() instead.',
      },
      {
        selector: 'no-restricted-syntax',
        message: 'Buddy you\'ve got problems.',
      },
    ],


    /**
     * disallow all tabs
     *
     * _DISABLED: This even errors when the tabs are in strings, and that just aint right._
     */
    'no-tabs': ['off'],


    /**
     * disallow ternary operators
     */
    'no-ternary': ['off'],


    /**
     * disallow trailing whitespace at the end of lines
     */
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],


    /**
     * disallow dangling underscores in identifiers
     */
    'no-underscore-dangle': ['off'],


    /**
     * disallow ternary operators when simpler alternatives exist
     */
    'no-unneeded-ternary': ['error', {
      defaultAssignment: false,
    }],


    /**
     * disallow whitespace before properties
     */
    'no-whitespace-before-property': ['error'],


    /**
     * enforce the location of single-line statements
     */
    'nonblock-statement-body-position': ['error', 'beside', {
      overrides: {},
    }],


    /**
     * enforce consistent line breaks inside braces
     */
    'object-curly-newline': ['error', {
      ExportDeclaration: {
        minProperties: 5,
        multiline: true,
        consistent: true,
      },
      ImportDeclaration: {
        minProperties: 5,
        multiline: true,
        consistent: true,
      },
      ObjectExpression: {
        minProperties: 5,
        multiline: true,
        consistent: true,
      },
      ObjectPattern: {
        minProperties: 5,
        multiline: true,
        consistent: true,
      },
    }],


    /**
     * enforce consistent spacing inside braces
     */
    'object-curly-spacing': ['error', 'always'],


    /**
     * enforce placing object properties on separate lines
     */
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],


    /**
     * enforce variables to be declared either together or separately in functions
     */
    'one-var': ['error', 'never'],


    /**
     * require or disallow newlines around variable declarations
     */
    'one-var-declaration-per-line': ['error', 'always'],


    /**
     * require or disallow assignment operator shorthand where possible
     */
    'operator-assignment': ['error', 'always'],


    /**
     * enforce consistent linebreak style for operators
     */
    'operator-linebreak': ['error', 'before', {
      overrides: {
        '=': 'none',
      },
    }],


    /**
     * require or disallow padding within blocks
     */
    'padded-blocks': ['error', 'never'],


    /**
     * require or disallow padding lines between statements
     */
    'padding-line-between-statements': ['off'],


    /**
     * disallow the use of `Math.pow` in favor of the `**` operator
     */
    'prefer-exponentiation-operator': ['error'],


    /**
     * disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
     */
    'prefer-object-spread': ['error'],


    /**
     * require quotes around object literal property names
     */
    'quote-props': ['error', 'as-needed'],


    /**
     * enforce the consistent use of either backticks, double, or single quotes
     */
    'quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: false,
    }],


    /**
     * require or disallow semicolons instead of ASI
     */
    'semi': ['error', 'never', {
      beforeStatementContinuationChars: 'always',
    }],


    /**
     * enforce consistent spacing before and after semicolons
     */
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],


    /**
     * enforce location of semicolons
     */
    'semi-style': ['error', 'first'],


    /**
     * require object keys to be sorted
     */
    'sort-keys': ['off'],


    /**
     * require variables within the same declaration block to be sorted
     */
    'sort-vars': ['off'],


    /**
     * enforce consistent spacing before blocks
     */
    'space-before-blocks': ['error'],


    /**
     * enforce consistent spacing before function definition opening parenthesis
     */
    'space-before-function-paren': ['error', 'always'],


    /**
     * enforce consistent spacing inside parentheses
     */
    'space-in-parens': ['error', 'never'],


    /**
     * require spacing around infix operators
     */
    'space-infix-ops': ['error'],


    /**
     * enforce consistent spacing before or after unary operators
     */
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],


    /**
     * enforce consistent spacing after the // or /* in a comment
     */
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: [],
        markers: [],
      },
      block: {
        markers: [],
        exceptions: [
          '**************************************************************************\\', // For section header comments
          '*', // for JSDoc Blocks
        ],
        balanced: true,
      },
    }],


    /**
     * enforce spacing around colons of switch statements
     */
    'switch-colon-spacing': ['error', {
      before: false,
      after: true,
    }],


    /**
     * require or disallow spacing between template tags and their literals
     */
    'template-tag-spacing': ['error', 'never'],


    /**
     * require or disallow Unicode byte order mark (BOM)
     */
    'unicode-bom': ['error', 'never'],


    /**
     * require parenthesis around regex literals
     */
    'wrap-regex': ['off'],
  },
}
