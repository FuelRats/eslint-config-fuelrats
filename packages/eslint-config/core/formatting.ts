import { propertyMaxPerLine } from '../util/constants'

export = {
  rules: {
    /**
     * Enforce linebreaks after opening and before closing array brackets
     */
    'array-bracket-newline': ['off'],


    /**
     * Enforce consistent spacing inside array brackets
     */
    'array-bracket-spacing': ['warn', 'never'],


    /**
     * Enforce line breaks after each array element
     */
    'array-element-newline': ['off'],


    /**
     * Require parentheses around arrow function arguments
     */
    'arrow-parens': ['warn', 'always'],


    /**
     * Enforce consistent spacing before and after the arrow in arrow functions
     */
    'arrow-spacing': ['warn', {
      before: true,
      after: true,
    }],


    /**
     * Disallow or enforce spaces inside of blocks after opening block and before closing block
     */
    'block-spacing': ['warn', 'always'],


    /**
     * Enforce consistent brace style for blocks
     */
    'brace-style': ['warn', '1tbs', {
      allowSingleLine: false,
    }],


    /**
     * Require or disallow trailing commas
     */
    'comma-dangle': ['warn', 'always-multiline'],


    /**
     * Enforce consistent spacing before and after commas
     */
    'comma-spacing': ['warn', {
      before: false,
      after: true,
    }],


    /**
     * Enforce consistent comma style
     */
    'comma-style': ['warn', 'last', {
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
     * Enforce consistent spacing inside computed property brackets
     */
    'computed-property-spacing': ['warn', 'never', { enforceForClassMembers: true }],


    /**
     * Enforce consistent newlines before and after dots
     */
    'dot-location': ['warn', 'property'],


    /**
     * Require or disallow newline at the end of files
     */
    'eol-last': ['error', 'always'],


    /**
     * Require or disallow spacing between function identifiers and their invocations
     */
    'func-call-spacing': ['warn', 'never'],


    /**
     * Enforce line breaks between arguments of a function call
     */
    'function-call-argument-newline': ['warn', 'consistent'],


    /**
     * Enforce consistent line breaks inside function parentheses
     */
    'function-paren-newline': ['warn', 'multiline-arguments'],


    /**
     * Enforce consistent spacing around `*` operators in generator functions
     */
    'generator-star-spacing': ['warn', 'both'],


    /**
     * Enforce the location of arrow function bodies
     */
    'implicit-arrow-linebreak': ['warn', 'beside'],


    /**
     * Enforce consistent indentation
     */
    'indent': ['warn', 2, {
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
      flatTernaryExpressions: false,

      /*
       * list derived from https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L143,
       * which was derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js,
       */
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
        'JSXFragment',
        'JSXOpeningFragment',
        'JSXClosingFragment',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
      ],
      ignoreComments: false,
    }],


    /**
     * Enforce the consistent use of either double or single quotes in JSX attributes
     */
    'jsx-quotes': ['error', 'prefer-double'],


    /**
     * Enforce consistent spacing between keys and values in object literal properties
     */
    'key-spacing': ['warn', {
      beforeColon: false,
      afterColon: true,
    }],


    /**
     * Enforce consistent spacing before and after keywords
     */
    'keyword-spacing': ['warn', {
      before: true,
      after: true,
    }],


    /**
     * Enforce position of line comments
     */
    'line-comment-position': ['off'],


    /**
     * Enforce consistent linebreak style
     */
    'linebreak-style': ['error', 'unix'],


    /**
     * Require empty lines around comments
     */
    'lines-around-comment': ['off'],


    /**
     * Require or disallow an empty line between class members
     */
    'lines-between-class-members': ['warn', 'always', {
      exceptAfterSingleLine: true,
    }],


    /**
     * Enforce a maximum line length
     */
    'max-len': ['error', {
      code: 180,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],


    /**
     * Enforce a maximum number of statements allowed per line
     */
    'max-statements-per-line': ['error', {
      max: 1,
    }],


    /**
     * Enforce newlines between operands of ternary expressions
     */
    'multiline-ternary': ['warn', 'always-multiline'],


    /**
     * Enforce or disallow parentheses when invoking a constructor with no arguments
     */
    'new-parens': ['warn'],


    /**
     * Require a newline after each call in a method chain
     */
    'newline-per-chained-call': ['warn', {
      ignoreChainWithDepth: 4,
    }],


    /**
     * Disallow unnecessary parentheses
     */
    'no-extra-parens': ['off'],


    /**
     * Disallow mixed spaces and tabs for indentation
     */
    'no-mixed-spaces-and-tabs': ['error'],


    /**
     * Disallow multiple spaces
     */
    'no-multi-spaces': ['warn', {
      ignoreEOLComments: false,
    }],


    /**
     * Disallow multiple empty lines
     */
    'no-multiple-empty-lines': ['warn', {
      max: 2,
      maxBOF: 0,
      maxEOF: 1,
    }],


    /**
     * Disallow all tabs
     */
    'no-tabs': ['off'],


    /**
     * Disallow trailing whitespace at the end of lines
     */
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],


    /**
     * Disallow whitespace before properties
     */
    'no-whitespace-before-property': ['warn'],


    /**
     * Enforce the location of single-line statements
     */
    'nonblock-statement-body-position': ['warn', 'beside', {
      overrides: {},
    }],


    /**
     * Enforce consistent line breaks after opening and before closing braces
     */
    'object-curly-newline': ['warn', {
      ExportDeclaration: {
        minProperties: propertyMaxPerLine,
        multiline: true,
        consistent: true,
      },
      ImportDeclaration: {
        minProperties: propertyMaxPerLine,
        multiline: true,
        consistent: true,
      },
      ObjectExpression: {
        minProperties: propertyMaxPerLine,
        multiline: true,
        consistent: true,
      },
      ObjectPattern: {
        minProperties: propertyMaxPerLine,
        multiline: true,
        consistent: true,
      },
    }],


    /**
     * Enforce consistent spacing inside braces
     */
    'object-curly-spacing': ['warn', 'always'],


    /**
     * Enforce placing object properties on separate lines
     */
    'object-property-newline': ['warn', {
      allowAllPropertiesOnSameLine: true,
    }],


    /**
     * Enforce consistent linebreak style for operators
     */
    'operator-linebreak': ['warn', 'before', {
      overrides: {
        '=': 'none',
      },
    }],


    /**
     * Require or disallow padding within blocks
     */
    'padded-blocks': ['warn', 'never'],

    /**
     * Require or disallow padding lines between statements
     */
    'padding-line-between-statements': ['off'],


    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     */
    'quotes': ['warn', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: false,
    }],


    /**
     * Enforce spacing between rest and spread operators and their expressions
     */
    'rest-spread-spacing': ['warn', 'never'],


    /**
     * Require or disallow semicolons instead of ASI
     */
    'semi': ['error', 'never', {
      beforeStatementContinuationChars: 'always',
    }],


    /**
     * Enforce consistent spacing before and after semicolons
     */
    'semi-spacing': ['warn', {
      before: false,
      after: true,
    }],


    /**
     * Enforce location of semicolons
     */
    'semi-style': ['warn', 'last'],


    /**
     * Enforce consistent spacing before blocks
     */
    'space-before-blocks': ['warn'],


    /**
     * Enforce consistent spacing before `function` definition opening parenthesis
     */
    'space-before-function-paren': ['warn', 'always'],


    /**
     * Enforce consistent spacing inside parentheses
     */
    'space-in-parens': ['warn', 'never'],


    /**
     * Require spacing around infix operators
     */
    'space-infix-ops': ['warn'],


    /**
     * Enforce consistent spacing before or after unary operators
     */
    'space-unary-ops': ['warn', {
      words: true,
      nonwords: false,
    }],


    /**
     * Enforce spacing around colons of switch statements
     */
    'switch-colon-spacing': ['warn', {
      before: false,
      after: true,
    }],


    /**
     * Require or disallow spacing around embedded expressions of template strings
     */
    'template-curly-spacing': ['warn', 'never'],


    /**
     * Require or disallow spacing between template tags and their literals
     */
    'template-tag-spacing': ['warn', 'never'],


    /**
     * Require or disallow Unicode byte order mark (BOM)
     */
    'unicode-bom': ['error', 'never'],


    /**
     * Require parentheses around immediate `function` invocations
     */
    'wrap-iife': ['error', 'outside', {
      functionPrototypeMethods: false,
    }],


    /**
     * Require parenthesis around regex literals
     */
    'wrap-regex': ['off'],


    /**
     * Require or disallow spacing around the `*` in `yield*` expressions
     */
    'yield-star-spacing': ['warn', 'both'],
  },
} as const
