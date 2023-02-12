module.exports = {
  plugins: [
    'eslint-comments',
  ],
  rules: {
    /**
     * require a eslint-enable comment for every eslint-disable comment
     */
    'eslint-comments/disable-enable-pair': ['error'],


    /**
     * disallow a eslint-enable comment for multiple eslint-disable comments
     */
    'eslint-comments/no-aggregating-enable': ['warn'],


    /**
     * disallow duplicate eslint-disable comments
     */
    'eslint-comments/no-duplicate-disable': ['warn'],

    /**
     * disallow eslint-disable comments about specific rules.
     */
    'eslint-comments/no-restricted-disable': [
      'error',
      'eslint-comments/*',
    ],

    /**
     * disallow ESLint directive-comments
     */
    'eslint-comments/no-use': ['off'],


    /**
     * disallow eslint-disable comments without rule names
     */
    'eslint-comments/no-unlimited-disable': ['error'],


    /**
     * disallow unused eslint-disable comments
     */
    'eslint-comments/no-unused-disable': ['warn'],


    /**
     * disallow unused eslint-enable comments
     */
    'eslint-comments/no-unused-enable': ['warn'],


    /**
     * require include descriptions in ESLint directive-comments
     */
    'eslint-comments/require-description': ['error', {
      ignore: ['eslint', 'eslint-enable', 'eslint-env', 'exported', 'global', 'globals'],
    }],
  },
};

