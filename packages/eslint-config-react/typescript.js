module.exports = {
  extends: [
    './shared',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
};
