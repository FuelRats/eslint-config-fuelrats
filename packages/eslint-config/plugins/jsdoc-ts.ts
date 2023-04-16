export = {
  extends: require.resolve('../core/plugin-jsdoc'),
  rules: {
    /**
     * Reports invalid value types.
     */
    'jsdoc/check-types': ['off'],


    /**
     * This rule reports types being used on `@param` or `@returns`.
     */
    'jsdoc/no-types': ['warn'],


    /**
     * Checks that types in jsdoc comments are defined. This can be used to check unimported types.
     */
    'jsdoc/no-undefined-types': ['off'],


    /**
     * Requires that all functions have a description.
     */
    'jsdoc/require-description': ['warn'],


    /**
     * Checks for presence of jsdoc comments, on class declarations as well as functions.
     */
    'jsdoc/require-jsdoc': ['off'],


    /**
     * Requires that each `@param` tag has a `description` value.
     */
    'jsdoc/require-param-description': ['warn'],

    /**
     * Requires that each `@param` tag has a `type` value.
     */
    'jsdoc/require-param-type': ['off'],


    /**
     * Requires that all function parameters are documented.
     */
    'jsdoc/require-param': ['off'],


    /**
     * Requires that each `@property` tag has a `description` value.
     */
    'jsdoc/require-property-description': ['warn'],


    /**
     * Requires that each `@property` tag has a `type` value.
     */
    'jsdoc/require-property-type': ['off'],


    /**
     * Requires that the `@returns` tag has a `description` value.
     */
    'jsdoc/require-returns-description': ['warn'],


    /**
     * Requires that the `@returns` tag has a `type` value.
     */
    'jsdoc/require-returns-type': ['off'],


    /**
     * Requires returns are documented.
     */
    'jsdoc/require-returns': ['off'],


    /**
     * Requires that yields are documented.
     */
    'jsdoc/require-yields': ['off'],
  },
} as const
