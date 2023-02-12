// Ruleset Imports
const coreRules = require('../util/coreRules');


/**
 * The plugin '@typescript-eslint/eslint-plugin' contains base rule extensions.
 * This config disables the base rule and enables the plugin rule with the base rule's config.
 * TODO: check each rule for extended configuration, and reconfigure as-needed
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    /**
     * Enforce consistent brace style for blocks
     */
    'brace-style': ['off'],
    '@typescript-eslint/brace-style': coreRules['brace-style'],


    /**
     * Require or disallow trailing comma
     */
    'comma-dangle': ['off'],
    '@typescript-eslint/comma-dangle': coreRules['comma-dangle'],


    /**
     * Enforces consistent spacing before and after commas
     */
    'comma-spacing': ['off'],
    '@typescript-eslint/comma-spacing': coreRules['comma-spacing'],


    /**
     * Enforce default parameters to be last
     */
    'default-param-last': ['off'],
    '@typescript-eslint/default-param-last': coreRules['default-param-last'],


    /**
     * enforce dot notation whenever possible
     */
    'dot-notation': ['off'],
    '@typescript-eslint/dot-notation': coreRules['dot-notation'],


    /**
     * Require or disallow spacing between function identifiers and their invocations
     */
    'func-call-spacing': ['off'],
    '@typescript-eslint/func-call-spacing': coreRules['func-call-spacing'],


    /**
     * Enforce consistent indentation
     *
     * NOTICE: This rule is on for completeness sake, however it's REALLY broken.
     */
    'indent': ['off'],
    '@typescript-eslint/indent': coreRules.indent,


    /**
     * require or disallow initialization in variable declarations
     */
    'init-declarations': ['off'],
    '@typescript-eslint/init-declarations': coreRules['init-declarations'],


    /**
     * Enforce consistent spacing between keys and values in object literal properties
     */
    'key-spacing': ['off'],
    '@typescript-eslint/key-spacing': coreRules['key-spacing'],


    /**
     * Enforce consistent spacing before and after keywords
     */
    'keyword-spacing': ['off'],
    '@typescript-eslint/keyword-spacing': coreRules['keyword-spacing'],


    /**
     * Require or disallow an empty line between class members
     */
    'lines-between-class-members': ['off'],
    '@typescript-eslint/lines-between-class-members': coreRules['lines-between-class-members'],


    /**
     * Disallow generic Array constructors
     */
    'no-array-constructor': ['off'],
    '@typescript-eslint/no-array-constructor': coreRules['no-array-constructor'],


    /**
     * Disallow duplicate class members
     */
    'no-dupe-class-members': ['off'],
    '@typescript-eslint/no-dupe-class-members': coreRules['no-dupe-class-members'],


    /**
     * Disallow empty functions
     */
    'no-empty-function': ['off'],
    '@typescript-eslint/no-empty-function': coreRules['no-empty-function'],


    /**
     * Disallow unnecessary parentheses
     */
    'no-extra-parens': ['off'],
    '@typescript-eslint/no-extra-parens': coreRules['no-extra-parens'],


    /**
     * Disallow unnecessary semicolons
     */
    'no-extra-semi': ['off'],
    '@typescript-eslint/no-extra-semi': coreRules['no-extra-semi'],


    /**
     * Disallow the use of eval()-like methods
     */
    'no-implied-eval': ['off'],
    '@typescript-eslint/no-implied-eval': coreRules['no-implied-eval'],


    /**
     * Disallow this keywords outside of classes or class-like objects
     */
    'no-invalid-this': ['off'],
    '@typescript-eslint/no-invalid-this': coreRules['no-invalid-this'],


    /**
     * Disallow function declarations that contain unsafe references inside loop statements
     */
    'no-loop-func': ['off'],
    '@typescript-eslint/no-loop-func': coreRules['no-loop-func'],


    /**
     * Disallow literal numbers that lose precision
     */
    'no-loss-of-precision': ['off'],
    '@typescript-eslint/no-loss-of-precision': coreRules['no-loss-of-precision'],


    /**
     * Disallow magic numbers
     */
    'no-magic-numbers': ['off'],
    '@typescript-eslint/no-magic-numbers': [coreRules['no-magic-numbers'][0], {
      ...coreRules['no-magic-numbers'][1],
      ignoreEnums: true,
      ignoreNumericLiteralTypes: true,
      ignoreReadonlyClassProperties: true,
    }],


    /**
     * Disallow variable redeclaration
     */
    'no-redeclare': ['off'],
    '@typescript-eslint/no-redeclare': coreRules['no-redeclare'],


    /**
     * Disallow specified modules when loaded by `import`.
     */
    'no-restricted-imports': ['off'],
    '@typescript-eslint/no-restricted-imports': ['off'],


    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope
     */
    'no-shadow': ['off'],
    '@typescript-eslint/no-shadow': coreRules['no-shadow'],


    /**
     * Disallow throwing literals as exceptions
     */
    'no-throw-literal': ['off'],
    '@typescript-eslint/no-throw-literal': coreRules['no-throw-literal'],


    /**
     * Disallow unused expressions
     */
    'no-unused-expressions': ['off'],
    '@typescript-eslint/no-unused-expressions': coreRules['no-unused-expressions'],


    /**
     * Disallow unused variables
     */
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': coreRules['no-unused-vars'],


    /**
     * Disallow the use of variables before they are defined
     */
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-use-before-define': coreRules['no-use-before-define'],


    /**
     * Disallow unnecessary constructors
     */
    'no-useless-constructor': ['off'],
    '@typescript-eslint/no-useless-constructor': coreRules['no-useless-constructor'],


    /**
     * Enforce consistent spacing inside braces
     */
    'object-curly-spacing': ['off'],
    '@typescript-eslint/object-curly-spacing': coreRules['object-curly-spacing'],


    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     */
    'quotes': ['off'],
    '@typescript-eslint/quotes': coreRules.quotes,


    /**
     * Disallow async functions which have no await expression
     */
    'require-await': ['off'],
    '@typescript-eslint/require-await': coreRules['require-await'],


    /**
     * Enforces consistent returning of awaited values
     */
    'no-return-await': ['off'],
    '@typescript-eslint/return-await': coreRules['no-return-await'],


    /**
     * Require or disallow semicolons instead of ASI
     */
    'semi': ['off'],
    '@typescript-eslint/semi': coreRules.semi,


    /**
     * Enforces consistent spacing before function parenthesis
     */
    'space-before-function-paren': ['off'],
    '@typescript-eslint/space-before-function-paren': coreRules['space-before-function-paren'],


    /**
     * This rule is aimed at ensuring there are spaces around infix operators.
     */
    'space-infix-ops': ['off'],
    '@typescript-eslint/space-infix-ops': coreRules['space-infix-ops'],
  },
};
