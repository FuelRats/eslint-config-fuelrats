module.exports = {
  env: {
    browser: true,
  },
  extends: [
    './shared',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
};
