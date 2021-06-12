module.exports = {
  plugins: [
    'react',
  ],
  rules: {
    /**
     * Enforce boolean attributes notation in JSX (fixable)
     */
    'react/jsx-boolean-value': ['error', 'never'],


    /**
     * Ensures inline tags are not rendered without spaces between them
     *
     */
    'react/jsx-child-element-spacing': ['off'],


    /**
     * Validate closing bracket location in JSX (fixable)
     */
    'react/jsx-closing-bracket-location': ['error', 'after-props'],


    /**
     * Validate closing tag location in JSX (fixable)
     */
    'react/jsx-closing-tag-location': ['error'],


    /**
     * Enforce or disallow newlines inside of curly braces in JSX attributes and expressions (fixable)
     */
    'react/jsx-curly-newline': ['error', {
      multiline: 'require',
      singleline: 'forbid',
    }],


    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
     */
    'react/jsx-curly-spacing': ['error', {
      when: 'never',
      children: true,
      allowMultiline: true,
    }],


    /**
     * Enforce or disallow spaces around equal signs in JSX attributes (fixable)
     */
    'react/jsx-equals-spacing': ['error', 'never'],


    /**
     * Restrict file extensions that may contain JSX
     */
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.js'],
    }],


    /**
     * Enforce position of the first prop in JSX (fixable)
     */
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],


    /**
     * Enforce shorthand or standard form for React fragments
     */
    'react/jsx-fragments': ['error', 'syntax'],


    /**
     * Enforce event handler naming conventions in JSX
     */
    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: '(_|#)?(handle|on)',
      eventHandlerPropPrefix: 'on',
      checkLocalVariables: true,
    }],


    /**
     * Validate JSX indentation (fixable)
     */
    'react/jsx-indent': ['error', 2, {
      checkAttributes: false,
      indentLogicalExpressions: true,
    }],


    /**
     * Validate props indentation in JSX (fixable)
     */
    'react/jsx-indent-props': ['error', 2],


    /**
     * Validate JSX has key prop when in array or iterator
     */
    'react/jsx-key': ['error', {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
    }],


    /**
     * Validate JSX maximum depth
     *
     * _DISABLED: To be determined by project._
     */
    'react/jsx-max-depth': ['off'],


    /**
     * Limit maximum of props on a single line in JSX (fixable)
     */
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'multiline',
    }],


    /**
     * Require or prevent a new line after jsx elements and expressions.
     */
    'react/jsx-newline': ['off'],


    /**
     * Prevent usage of `.bind()` and arrow functions in JSX props
     */
    'react/jsx-no-bind': ['error', {
      ignoreDOMComponents: false,
      ignoreRefs: false,
      allowArrowFunctions: false,
      allowFunctions: false,
      allowBind: false,
    }],


    /**
     * Prevent comments from being inserted as text nodes
     */
    'react/jsx-no-comment-textnodes': ['error'],


    /**
     * Prevent non-stable values (i.e. object identities) from being used as a value for `Context.Provider`.
     */
    'react/jsx-no-constructed-context-values': ['error'],


    /**
     * Prevent duplicate props in JSX
     */
    'react/jsx-no-duplicate-props': ['error', {
      ignoreCase: true,
    }],


    /**
     * Prevent usage of unwrapped JSX strings
     */
    'react/jsx-no-literals': ['error'],


    /**
     * Prevent usage of `javascript:` URLs
     */
    'react/jsx-no-script-url': ['error'],


    /**
     * Prevent usage of unsafe `target='_blank'`
     */
    'react/jsx-no-target-blank': ['error', {
      enforceDynamicLinks: 'always',
    }],


    /**
     * Disallow undeclared variables in JSX
     */
    'react/jsx-no-undef': ['error'],


    /**
     * Disallow unnecessary fragments
     */
    'react/jsx-no-useless-fragment': ['error'],


    /**
     * Limit to one expression per line in JSX
     */
    'react/jsx-one-expression-per-line': ['off'],


    /**
     * Enforce curly braces or disallow unnecessary curly braces in JSX
     */
    'react/jsx-curly-brace-presence': ['error', {
      props: 'never',
      children: 'ignore',
    }],


    /**
     * Enforce PascalCase for user-defined JSX components
     */
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: false,
      ignore: [],
    }],

    /**
     * Disallow multiple spaces between inline JSX props (fixable)
     */
    'react/jsx-props-no-multi-spaces': ['error'],

    /**
     * Disallow JSX props spreading
     *
     * _DISABLED: We allow prop spreading. This is quite important when passing props to inputs_
     */
    'react/jsx-props-no-spreading': ['off'],


    /**
     * Enforce default props alphabetical sorting
     */
    'react/jsx-sort-default-props': ['error', {
      ignoreCase: true,
    }],


    /**
     * Enforce props alphabetical sorting (fixable)
     */
    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false,
      ignoreCase: true,
      noSortAlphabetically: false,
      reservedFirst: true,
    }],


    /**
     * Validate whitespace in and around the JSX opening and closing brackets (fixable)
     */
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],


    /**
     * Prevent React to be incorrectly marked as unused
     */
    'react/jsx-uses-react': ['off'],


    /**
     * Prevent variables used in JSX to be incorrectly marked as unused
     */
    'react/jsx-uses-vars': ['error'],


    /**
     * Prevent missing parentheses around multilines JSX (fixable)
     */
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
  },
}
