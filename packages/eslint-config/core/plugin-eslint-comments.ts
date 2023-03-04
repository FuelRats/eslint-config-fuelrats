export = {
  plugins: [
    '@eslint-community/eslint-comments',
  ],
  rules: {
    /**
     * require a eslint-enable comment for every eslint-disable comment
     */
    '@eslint-community/eslint-comments/disable-enable-pair': ['error'],


    /**
     * disallow a eslint-enable comment for multiple eslint-disable comments
     */
    '@eslint-community/eslint-comments/no-aggregating-enable': ['warn'],


    /**
     * disallow duplicate eslint-disable comments
     */
    '@eslint-community/eslint-comments/no-duplicate-disable': ['warn'],

    /**
     * disallow eslint-disable comments about specific rules.
     */
    '@eslint-community/eslint-comments/no-restricted-disable': [
      'error',
      '@eslint-community/eslint-comments/*',
    ],

    /**
     * disallow ESLint directive-comments
     */
    '@eslint-community/eslint-comments/no-use': ['off'],


    /**
     * disallow eslint-disable comments without rule names
     */
    '@eslint-community/eslint-comments/no-unlimited-disable': ['error'],


    /**
     * disallow unused eslint-disable comments
     */
    '@eslint-community/eslint-comments/no-unused-disable': ['warn'],


    /**
     * disallow unused eslint-enable comments
     */
    '@eslint-community/eslint-comments/no-unused-enable': ['warn'],


    /**
     * require include descriptions in ESLint directive-comments
     */
    '@eslint-community/eslint-comments/require-description': ['error', {
      ignore: ['eslint', 'eslint-enable', 'eslint-env', 'exported', 'global', 'globals'],
    }],
  },
} as const

