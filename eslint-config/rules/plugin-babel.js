module.exports = {
  plugins: [
    'babel',
  ],
  rules: {
    // require constructor names to begin with a capital letter
    // Ignores capitalized decorators.
    'babel/new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
      newIsCapExceptions: [],
      capIsNewExceptions: [
        'GET', // For HTTP methods
        'POST',
        'PUT',
        'DELETE',
        'Stripe', // For Stripe lib (which exists as window.Stripe)
      ],
      properties: true,
    }],


    // disallow this keywords outside of classes or class-like objects
    // Doesn't fail when inside class properties.
    'babel/no-invalid-this': ['error'],


    // enforce consistent spacing inside braces
    // Doesn't complain about direct ESModule exports from modules.
    'babel/object-curly-spacing': ['error', 'always'],


    // enforce the consistent use of either backticks, double, or single quotes
    // Doesn't complain about JSX fragment shorthand syntax.
    'babel/quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: false,
    }],


    // require or disallow semicolons instead of ASI
    // Doesn't fail when using for-await-of. Includes class properties.
    'babel/semi': ['error', 'never', {
      beforeStatementContinuationChars: 'always',
    }],


    // disallow unused expressions
    // Doesn't fail when using do expressions or optional chaining.
    'babel/no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
    }],


    // enforce comparing typeof expressions against valid strings
    // Doesn't complain when used with BigInt.
    'babel/valid-typeof': ['error'],
  },
}
