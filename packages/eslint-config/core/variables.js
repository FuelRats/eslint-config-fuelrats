const confusingGlobals = require('../util/confusingGlobals')

module.exports = {
  rules: {
    /**
     * require or disallow initialization in variable declarations
     */
    'init-declarations': ['error', 'always'],


    /**
     * disallow deleting variables
     */
    'no-delete-var': ['error'],


    /**
     * disallow labels that share a name with a variable
     */
    'no-label-var': ['error'],


    /**
     * disallow specified global variables
     */
    'no-restricted-globals': ['error',
      {
        name: 'isFinite',
        message: 'Global `isFinite` is a flawed implementation. Use `Number.isFinite()` instead.',
      },
      {
        name: 'isNaN',
        message: 'Global `isNaN` is a flawed implementation. Use `Number.isNaN()` instead.',
      },
    ].concat(confusingGlobals),


    /**
     * disallow variable declarations from shadowing variables declared in the outer scope
     */
    'no-shadow': ['error'],


    /**
     * disallow identifiers from shadowing restricted names
     */
    'no-shadow-restricted-names': ['error'],


    /**
     * disallow the use of undeclared variables unless mentioned in `global` comments
     */
    'no-undef': ['error', {
      typeof: true,
    }],


    /**
     * disallow initializing variables to undefined
     *
     * _DISABLED: We do not allow uninitialized variables, so this is useful._
     */
    'no-undef-init': ['off'],


    /**
     * disallow the use of undefined as an identifier
     *
     * _DISABLED: undefined is useful in default implicit return arrow functions._
     */
    'no-undefined': ['off'],


    /**
     * disallow unused variables
     */
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
    }],


    /**
     * disallow the use of variables before they are defined
     */
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: true,
    }],
  },
}
