module.exports = {
  env: {
    node: true,
  },
  extends: require.resolve('../eslint-config/purejs.js'),
  rules: {
    'jsdoc/require-jsdoc': 0,
  },
  parserOptions: {
    requireConfigFile: false,
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: {
        mocha: true,
      },
    },
  ],
}
