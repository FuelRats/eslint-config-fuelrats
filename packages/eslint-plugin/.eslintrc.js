module.exports = {
  env: {
    node: true,
  },
  extends: '../eslint-config/index.js',
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
