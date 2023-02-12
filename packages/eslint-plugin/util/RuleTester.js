const { RuleTester } = require('eslint');

RuleTester.setDefaultConfig({
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
});

module.exports = RuleTester;
