module.exports = {
  plugins: [
    'jsdoc',
  ],
  rules: {
    /**
     * Checks that `@access` tags are valid.
     */
    'jsdoc/check-access': ['off'],


    /**
     * Reports invalid alignment of JSDoc block asterisks.
     */
    'jsdoc/check-alignment': ['warn'],


    /**
     * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
     */
    'jsdoc/check-examples': ['warn'],


    /**
     * Reports invalid padding inside JSDoc blocks.
     */
    'jsdoc/check-indentation': ['warn'],


    /**
     * Reports invalid alignment of JSDoc block lines.
     */
    'jsdoc/check-line-alignment': ['warn', 'never'],


    /**
     * Ensures that parameter names in JSDoc match those in the function declaration.
     */
    'jsdoc/check-param-names': ['warn', {
      disableExtraPropertyReporting: true,
    }],


    /**
     * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
     */
    'jsdoc/check-property-names': ['off'],


    /**
     * Reports against Google Closure Compiler syntax.
     */
    'jsdoc/check-syntax': ['off'],


    /**
     * Reports invalid block tag names.
     */
    'jsdoc/check-tag-names': ['warn', {
      definedTags: ['endpoint'],
    }],


    /**
     * Reports invalid value types.
     */
    'jsdoc/check-types': ['warn'],


    /**
     * Checks the values of specific metadata tags.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/master/README.md#check-values
     */
    'jsdoc/check-values': ['off'],


    /**
     * Expects specific tags to be empty of any content.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc/blob/master/README.md#empty-tags
     */
    'jsdoc/empty-tags': ['off'],


    /**
     * Reports an issue with any non-constructor function using @implements.
     */
    'jsdoc/implements-on-classes': ['off'],


    /**
     * Enforces a regular expression pattern on descriptions.
     */
    'jsdoc/match-description': ['off'],


    /**
     * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
     */
    'jsdoc/multiline-blocks': ['warn', {
      noSingleLineBlocks: true,
    }],


    /**
     * Enforces a consistent padding of the block description.
     */
    'jsdoc/newline-after-description': ['off'],


    /**
     * Checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
     */
    'jsdoc/no-bad-blocks': ['error'],


    /**
     * Reports defaults being used on the relevant portion of `@param` or `@default`.
     */
    'jsdoc/no-defaults': ['off'],


    /**
     * Reports when certain comment structures are always expected.
     */
    'jsdoc/no-missing-syntax': ['off'],


    /**
     * Prevents use of multiple asterisks at the beginning of lines.
     */
    'jsdoc/no-multi-asterisks': ['warn'],


    /**
     * Reports when certain comment structures are present.
     */
    'jsdoc/no-restricted-syntax': ['off'],


    /**
     * This rule reports types being used on `@param` or `@returns`.
     */
    'jsdoc/no-types': ['off'],


    /**
     * Checks that types in jsdoc comments are defined. This can be used to check unimported types.
     */
    'jsdoc/no-undefined-types': ['warn'],


    /**
     * Requires that each JSDoc line starts with an `*`.
     */
    'jsdoc/require-asterisk-prefix': ['warn', 'always'],


    /**
     * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences
     */
    'jsdoc/require-description-complete-sentence': ['off'],


    /**
     * Requires that all functions have a description.
     */
    'jsdoc/require-description': ['off'],


    /**
     * Requires that all functions have examples.
     */
    'jsdoc/require-example': ['off'],


    /**
     * Checks that all files have a `@file`, `@fileoverview`, or `@overview` tag.
     */
    'jsdoc/require-file-overview': ['off'],


    /**
     * Requires a hyphen before the `@param` description.
     *
     * ಠ_ಠ
     */
    'jsdoc/require-hyphen-before-param-description': ['off'],


    /**
     * Checks for presence of jsdoc comments, on class declarations as well as functions.
     */
    'jsdoc/require-jsdoc': ['warn', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: false,
        FunctionExpression: false,
      },
    }],


    /**
     * Requires that each `@param` tag has a `description` value.
     */
    'jsdoc/require-param-description': ['off'],


    /**
     * Requires that each `@param` tag has a `name` value
     */
    'jsdoc/require-param-name': ['warn'],


    /**
     * Requires that each `@param` tag has a `type` value.
     */
    'jsdoc/require-param-type': ['warn'],


    /**
     * Requires that all function parameters are documented.
     */
    'jsdoc/require-param': ['warn', {
      exemptedBy: ['endpoint', 'inheritdoc'],
    }],


    /**
     * Requires that each `@property` tag has a `description` value.
     */
    'jsdoc/require-property-description': ['off'],


    /**
     * Requires that each `@property` tag has a `name` value.
     */
    'jsdoc/require-property-name': ['warn'],


    /**
     * Requires that each `@property` tag has a `type` value.
     */
    'jsdoc/require-property-type': ['warn'],


    /**
     * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
     */
    'jsdoc/require-property': ['off'],


    /**
     * Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
     */
    'jsdoc/require-returns-check': ['warn'],


    /**
     * Requires that the `@returns` tag has a `description` value.
     */
    'jsdoc/require-returns-description': ['off'],


    /**
     * Requires that the `@returns` tag has a `type` value.
     */
    'jsdoc/require-returns-type': ['warn'],


    /**
     * Requires returns are documented.
     */
    'jsdoc/require-returns': ['warn', {
      exemptedBy: ['endpoint', 'inheritdoc', 'yields'],
    }],


    /**
     * Requires that throw statements are documented.
     */
    'jsdoc/require-throws': ['off'],


    /**
     * Ensures that if a `@yields` is present that a `yield` (or `yield` with a value) is present in the function body.
     */
    'jsdoc/require-yields-check': ['warn'],


    /**
     * Requires that yields are documented.
     */
    'jsdoc/require-yields': ['warn'],


    /**
     * Enforces lines (or no lines) between tags.
     */
    'jsdoc/tag-lines': ['warn', 'never'],


    /**
     * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
     */
    'jsdoc/valid-types': ['off'],
  },
}
