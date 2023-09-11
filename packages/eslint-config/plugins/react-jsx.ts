export = {
  plugins: [
    'react',
  ],
  rules: {
    /**
     * Enforce boolean attributes notation in JSX (fixable)
     */
    'react/jsx-boolean-value': ['warn', 'never'],


    /**
     * Ensures inline tags are not rendered without spaces between them
     *
     */
    'react/jsx-child-element-spacing': ['off'],


    /**
     * Validate closing bracket location in JSX (fixable)
     */
    'react/jsx-closing-bracket-location': ['warn', 'after-props'],


    /**
     * Validate closing tag location in JSX (fixable)
     */
    'react/jsx-closing-tag-location': ['warn'],


    /**
     * Enforce or disallow newlines inside of curly braces in JSX attributes and expressions (fixable)
     */
    'react/jsx-curly-newline': ['warn', {
      multiline: 'require',
      singleline: 'forbid',
    }],


    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
     */
    'react/jsx-curly-spacing': ['warn', {
      when: 'never',
      children: true,
      allowMultiline: true,
    }],


    /**
     * Enforce or disallow spaces around equal signs in JSX attributes (fixable)
     */
    'react/jsx-equals-spacing': ['warn', 'never'],


    /**
     * Restrict file extensions that may contain JSX
     */
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js', '.cjs', '.mjs', '.jsx', '.tsx'],
    }],


    /**
     * Enforce position of the first prop in JSX (fixable)
     */
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],


    /**
     * Enforce shorthand or standard form for React fragments
     */
    'react/jsx-fragments': ['warn', 'syntax'],


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
    'react/jsx-indent': ['warn', 2, {
      checkAttributes: false,
      indentLogicalExpressions: true,
    }],


    /**
     * Validate props indentation in JSX (fixable)
     */
    'react/jsx-indent-props': ['warn', 2],


    /**
     * Validate JSX has key prop when in array or iterator
     */
    'react/jsx-key': ['error', {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
      warnOnDuplicates: true,
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
    'react/jsx-max-props-per-line': ['warn', {
      maximum: {
        single: 5,
        multi: 1,
      },
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
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
    }],


    /**
     * Prevent comments from being inserted as text nodes
     */
    'react/jsx-no-comment-textnodes': ['off'],


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
     * Disallow problematic leaked values from being rendered
     */
    'react/jsx-no-leaked-render': ['error', {
      validStrategies: ['coerce', 'ternary'],
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
      allowReferrer: false,
      enforceDynamicLinks: 'always',
      warnOnSpreadAttributes: false,
      links: true,
      forms: true,
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
      propElementValues: 'always',
      props: 'never',
      children: 'ignore',
    }],


    /**
     * Enforce PascalCase for user-defined JSX components
     */
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: false,
      allowLeadingUnderscore: false,
      allowNamespace: true,
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
} as const
