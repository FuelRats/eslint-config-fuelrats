module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': ['off'],


    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],


    // enforce line breaks after each array element
    'array-element-newline': ['off'],


    // disallow or enforce spaces inside of blocks after opening block and before closing block
    'block-spacing': ['error', 'always'],


    // enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false,
    }],


    // enforce camelcase naming convention
    'camelcase': ['error', {
      properties: 'always',
      ignoreDestructuring: false,
      allow: [
        '^UNSAFE_', // for unsafe React lifecycle methods
      ],
    }],


    // enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': ['off'],


    // require or disallow trailing commas
    'comma-dangle': ['error', 'always-multiline'],


    // enforce consistent spacing before and after commas
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],


    // enforce consistent comma style
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


    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['error', 'never'],


    // enforce consistent naming when capturing the current execution context
    'consistent-this': ['error', 'self'],


    // require or disallow newline at the end of files
    'eol-last': ['error', 'always'],


    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],


    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': ['error', 'always', {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: true,
    }],


    // require or disallow named function expressions
    'func-names': ['error', 'always', {
      generators: 'always',
    }],


    // enforce the consistent use of either function declarations or expressions
    'func-style': ['error', 'expression'],


    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['error', 'consistent'],


    // disallow specified identifiers
    'id-blacklist': ['off'],


    // enforce minimum and maximum identifier lengths
    'id-length': ['error', {
      min: 2,
      max: 35,
    }],


    // require identifiers to match a specified regular expression
    'id-match': ['off'],


    // enforce the location of arrow function bodies
    'implicit-arrow-linebreak': ['error', 'beside'],


    // enforce consistent indentation
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
        parameters: 'first',
        body: 1,
      },
      FunctionExpression: {
        parameters: 'first',
        body: 1,
      },
      CallExpression: {
        arguments: 'first',
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


    // enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': ['error', 'prefer-double'],


    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],


    // enforce consistent spacing before and after keywords
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],


    // enforce position of line comments
    'line-comment-position': ['off'],


    // enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],


    // require empty lines around comments
    'lines-around-comment': ['off'],


    // require or disallow an empty line between class members
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],


    // enforce a maximum depth that blocks can be nested
    'max-depth': ['error', 6],


    // enforce a maximum line length
    'max-len': ['error', 180],


    // enforce a maximum number of lines per file
    'max-lines': ['error', 750],


    // enforce a maximum number of line of code in a function
    'max-lines-per-function': ['error', 100],


    // enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': ['error', 5],


    // enforce a maximum number of parameters in function definitions
    'max-params': ['error', 10],


    // enforce a maximum number of statements allowed in function blocks
    'max-statements': ['error', 30],


    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': ['error', {
      max: 1,
    }],


    // enforce a particular style for multiline comments
    'multiline-comment-style': ['off'],


    // enforce newlines between operands of ternary expressions
    'multiline-ternary': ['error', 'always-multiline'],


    // require constructor names to begin with a capital letter
    // DISABLED: using babel/new-cap for compatibility
    'new-cap': ['off'],


    // require parentheses when invoking a constructor with no arguments
    'new-parens': ['error'],


    // require a newline after each call in a method chain
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 4,
    }],


    // disallow Array constructors
    'no-array-constructor': ['error'],


    // disallow bitwise operators
    'no-bitwise': ['error'],


    // disallow continue statements
    'no-continue': ['error'],


    // disallow inline comments after code
    'no-inline-comments': ['off'],


    // disallow if statements as the only statement in else blocks
    'no-lonely-if': ['error'],


    // disallow mixed binary operators
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


    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': ['error'],


    // disallow use of chained assignment expressions
    'no-multi-assign': ['error'],


    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', {
      max: 5,
      maxBOF: 0,
      maxEOF: 1,
    }],


    // disallow negated conditions
    'no-negated-condition': ['error'],


    // disallow nested ternary expressions
    'no-nested-ternary': ['error'],


    // disallow Object constructors
    'no-new-object': ['error'],


    // disallow the unary operators ++ and --
    'no-plusplus': ['error'],


    // disallow specified syntax
    'no-restricted-syntax': ['error',
      {
        selector: 'ForInStatement',
        message: 'ಠ_ಠ We use modern ECMAScript m8. Use Object.{keys|values|entries}(obj).forEach(...) instead.',
      },
      {
        selector: 'ForOfStatement',
        message: 'For-of is too slow in most environments compared to it\'s alternatives. Use array.forEach(...) instead.',
      },
      {
        selector: 'WithStatement',
        message: 'ಠ_ಠ With statement is deprecated, ya chump.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are like GOTOs, they make your code less readable for little benefit. ',
      },
      {
        selector: 'BinaryExpression[operator=\'in\']',
        message: 'In operator can cause problematic behavior. Use Obj.isOwnProperty() instead.',
      },
      {
        selector: 'no-restricted-syntax',
        message: 'Buddy you\'ve got problems.',
      },
      {
        selector: 'DebuggerStatement',
        message: 'You may think you need this, but you don\'t. Set your devenv up correctly, chump.',
      },
    ],


    // disallow all tabs
    'no-tabs': ['error'],


    // disallow ternary operators
    'no-ternary': ['off'],


    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],


    // disallow dangling underscores in identifiers
    'no-underscore-dangle': ['off'],


    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', {
      defaultAssignment: false,
    }],


    // disallow whitespace before properties
    'no-whitespace-before-property': ['error'],


    // enforce the location of single-line statements
    'nonblock-statement-body-position': ['error', 'beside', {
      overrides: {},
    }],


    // enforce consistent line breaks inside braces
    'object-curly-newline': ['error', {
      ExportDeclaration: {
        minProperties: 2,
        multiline: true,
        consistent: true,
      },
      ImportDeclaration: {
        minProperties: 2,
        multiline: true,
        consistent: true,
      },
      ObjectExpression: {
        minProperties: 2,
        multiline: true,
        consistent: true,
      },
      ObjectPattern: {
        minProperties: 2,
        multiline: true,
        consistent: true,
      },
    }],


    // enforce consistent spacing inside braces
    // DISABLED: using babel/object-curly-spacing for compatibility
    'object-curly-spacing': ['off'],


    // enforce placing object properties on separate lines
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false,
    }],


    // enforce variables to be declared either together or separately in functions
    'one-var': ['error', 'never'],


    // require or disallow newlines around variable declarations
    'one-var-declaration-per-line': ['error', 'always'],


    // require or disallow assignment operator shorthand where possible
    'operator-assignment': ['error', 'always'],


    // enforce consistent linebreak style for operators
    'operator-linebreak': ['error', 'before', {
      overrides: {
        '=': 'none',
      },
    }],


    // require or disallow padding within blocks
    'padded-blocks': ['error', 'never'],


    // require or disallow padding lines between statements
    'padding-line-between-statements': ['off'],


    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    'prefer-object-spread': ['error'],


    // require quotes around object literal property names
    'quote-props': ['error', 'as-needed'],


    // enforce the consistent use of either backticks, double, or single quotes
    // DISABLED: using babel/quotes for compatibility
    'quotes': ['off'],


    // require JSDoc comments
    'require-jsdoc': ['off'],


    // require or disallow semicolons instead of ASI
    // DISABLED: using babel/semi for compatibility
    'semi': ['off'],


    // enforce consistent spacing before and after semicolons
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],


    // enforce location of semicolons
    'semi-style': ['error', 'last'],


    // require object keys to be sorted
    'sort-keys': ['off', 'asc', {
      caseSensitive: false,
      natural: true,
    }],


    // require variables within the same declaration block to be sorted
    'sort-vars': ['off'],


    // enforce consistent spacing before blocks
    'space-before-blocks': ['error'],


    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': ['error', 'always'],


    // enforce consistent spacing inside parentheses
    'space-in-parens': ['error', 'never'],


    // require spacing around infix operators
    'space-infix-ops': ['error'],


    // enforce consistent spacing before or after unary operators
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],


    // enforce consistent spacing after the // or /* in a comment
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


    // enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error', {
      before: false,
      after: true,
    }],


    // require or disallow spacing between template tags and their literals
    'template-tag-spacing': ['error', 'never'],


    // require or disallow Unicode byte order mark (BOM)
    'unicode-bom': ['error', 'never'],


    // require parenthesis around regex literals
    'wrap-regex': ['off'],
  },
}
