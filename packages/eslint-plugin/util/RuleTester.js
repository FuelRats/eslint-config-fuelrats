const { RuleTester } = require('eslint')

RuleTester.setDefaultConfig({
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    babelOptions: {
      configFile: require.resolve('../babel.config.js'),
    },
  },
})

module.exports = RuleTester
