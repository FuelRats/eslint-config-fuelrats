// Ruleset Imports
const bestPractices = require('./bestpractices')
const style = require('./style')


/**
 * This plugin config turns off the base rules, and applies the same config to the corresponding babel rules.
 * As such, it does things a bit differently. :)
 */
module.exports = {
  plugins: [
    '@babel',
  ],
  rules: {
    /**
     * require constructor names to begin with a capital letter
     *
     * Ignores capitalized decorators.
     */
    'new-cap': ['off'],
    '@babel/new-cap': style.rules['new-cap'],


    /**
     * disallow this keywords outside of classes or class-like objects
     *
     * Doesn't fail when inside class properties.
     */
    'no-invalid-this': ['off'],
    '@babel/no-invalid-this': bestPractices.rules['no-invalid-this'],

    /**
     * disallow unused expressions
     *
     * Doesn't fail when using do expressions or optional chaining.
     */
    'no-unused-expressions': ['off'],
    '@babel/no-unused-expressions': bestPractices.rules['no-unused-expressions'],

    /**
     * enforce consistent spacing inside braces
     *
     * Doesn't complain about direct ESModule exports from modules.
     */
    'object-curly-spacing': ['off'],
    '@babel/object-curly-spacing': style.rules['object-curly-spacing'],

    /**
     * require or disallow semicolons instead of ASI
     *
     * Doesn't fail when using for-await-of. Includes class properties.
     */
    'semi': ['off'],
    '@babel/semi': style.rules.semi,
  },
}
