/* eslint-disable dot-notation */
// Ruleset Imports
const { rules: bestPracticeRules } = require('../core/bestpractices')
const { rules: errorsRules } = require('../core/errors')
const { rules: es6Rules } = require('../core/es6')
const { rules: styleRules } = require('../core/style')
const { rules: variablesRules } = require('../core/variables')




/**
 * The plugin '@typescript-eslint/eslint-plugin' contains base rule extensions.
 * This config disables the base rule and enables the plugin rule with the base rule's config.
 * TODO: check each rule for extended configuration, and reconfigure as-needed
 */
const typescriptExtensions = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    /**
     * Enforce consistent brace style for blocks
     */
    'brace-style': ['off'],
    '@typescript-eslint/brace-style': styleRules['brace-style'],


    /**
     * Require or disallow trailing comma
     */
    'comma-dangle': ['off'],
    '@typescript-eslint/comma-dangle': styleRules['comma-dangle'],


    /**
     * Enforces consistent spacing before and after commas
     */
    'comma-spacing': ['off'],
    '@typescript-eslint/comma-spacing': styleRules['comma-spacing'],


    /**
     * Enforce default parameters to be last
     */
    'default-param-last': ['off'],
    '@typescript-eslint/default-param-last': bestPracticeRules['default-param-last'],


    /**
     * enforce dot notation whenever possible
     */
    'dot-notation': ['off'],
    '@typescript-eslint/dot-notation': bestPracticeRules['dot-notation'],


    /**
     * Require or disallow spacing between function identifiers and their invocations
     */
    'func-call-spacing': ['off'],
    '@typescript-eslint/func-call-spacing': styleRules['func-call-spacing'],


    /**
     * Enforce consistent indentation
     */
    'indent': ['off'],
    '@typescript-eslint/indent': styleRules['indent'],


    /**
     * require or disallow initialization in variable declarations
     */
    'init-declarations': ['off'],
    '@typescript-eslint/init-declarations': variablesRules['init-declarations'],


    /**
     * Enforce consistent spacing before and after keywords
     */
    'keyword-spacing': ['off'],
    '@typescript-eslint/keyword-spacing': styleRules['keyword-spacing'],


    /**
     * Require or disallow an empty line between class members
     */
    'lines-between-class-members': ['off'],
    '@typescript-eslint/lines-between-class-members': styleRules['lines-between-class-members'],


    /**
     * Disallow generic Array constructors
     */
    'no-array-constructor': ['off'],
    '@typescript-eslint/no-array-constructor': styleRules['no-array-constructor'],


    /**
     * Disallow duplicate class members
     */
    'no-dupe-class-members': ['off'],
    '@typescript-eslint/no-dupe-class-members': es6Rules['no-dupe-class-members'],


    /**
     * Disallow duplicate imports
     */
    'no-duplicate-imports': ['off'],
    '@typescript-eslint/no-duplicate-imports': es6Rules['no-duplicate-imports'],


    /**
     * Disallow empty functions
     */
    'no-empty-function': ['off'],
    '@typescript-eslint/no-empty-function': bestPracticeRules['no-empty-function'],


    /**
     * Disallow unnecessary parentheses
     */
    'no-extra-parens': ['off'],
    '@typescript-eslint/no-extra-parens': errorsRules['no-extra-parens'],


    /**
     * Disallow unnecessary semicolons
     */
    'no-extra-semi': ['off'],
    '@typescript-eslint/no-extra-semi': errorsRules['no-extra-semi'],


    /**
     * Disallow the use of eval()-like methods
     */
    'no-implied-eval': ['off'],
    '@typescript-eslint/no-implied-eval': bestPracticeRules['no-implied-eval'],


    /**
     * Disallow this keywords outside of classes or class-like objects
     */
    'no-invalid-this': ['off'],
    '@typescript-eslint/no-invalid-this': bestPracticeRules['no-invalid-this'],


    /**
     * Disallow function declarations that contain unsafe references inside loop statements
     */
    'no-loop-func': ['off'],
    '@typescript-eslint/no-loop-func': bestPracticeRules['no-loop-func'],


    /**
     * Disallow literal numbers that lose precision
     */
    'no-loss-of-precision': ['off'],
    '@typescript-eslint/no-loss-of-precision': errorsRules['no-loss-of-precision'],


    /**
     * Disallow magic numbers
     */
    'no-magic-numbers': ['off'],
    '@typescript-eslint/no-magic-numbers': bestPracticeRules['no-magic-numbers'],


    /**
     * Disallow variable redeclaration
     */
    'no-redeclare': ['off'],
    '@typescript-eslint/no-redeclare': bestPracticeRules['no-redeclare'],


    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope
     */
    'no-shadow': ['off'],
    '@typescript-eslint/no-shadow': variablesRules['no-shadow'],


    /**
     * Disallow throwing literals as exceptions
     */
    'no-throw-literal': ['off'],
    '@typescript-eslint/no-throw-literal': bestPracticeRules['no-throw-literal'],


    /**
     * Disallow unused expressions
     */
    'no-unused-expressions': ['off'],
    '@typescript-eslint/no-unused-expressions': bestPracticeRules['no-unused-expressions'],


    /**
     * Disallow unused variables
     */
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': variablesRules['no-unused-vars'],


    /**
     * Disallow the use of variables before they are defined
     */
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-use-before-define': variablesRules['no-use-before-define'],


    /**
     * Disallow unnecessary constructors
     */
    'no-useless-constructor': ['off'],
    '@typescript-eslint/no-useless-constructor': es6Rules['no-useless-constructor'],


    /**
     * Enforce consistent spacing inside braces
     */
    'object-curly-spacing': ['off'],
    '@typescript-eslint/object-curly-spacing': styleRules['object-curly-spacing'],


    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     */
    'quotes': ['off'],
    '@typescript-eslint/quotes': styleRules['quotes'],


    /**
     * Disallow async functions which have no await expression
     */
    'require-await': ['off'],
    '@typescript-eslint/require-await': bestPracticeRules['require-await'],


    /**
     * Enforces consistent returning of awaited values
     */
    'no-return-await': ['off'],
    '@typescript-eslint/return-await': bestPracticeRules['no-return-await'],


    /**
     * Require or disallow semicolons instead of ASI
     */
    'semi': ['off'],
    '@typescript-eslint/semi': styleRules['semi'],


    /**
     * Enforces consistent spacing before function parenthesis
     */
    'space-before-function-paren': ['off'],
    '@typescript-eslint/space-before-function-paren': styleRules['space-before-function-paren'],


    /**
     * This rule is aimed at ensuring there are spaces around infix operators.
     */
    'space-infix-ops': ['off'],
    '@typescript-eslint/space-infix-ops': styleRules['space-infix-ops'],
  },
}

module.exports = typescriptExtensions
