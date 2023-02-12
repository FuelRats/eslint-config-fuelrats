module.exports = {
  extends: [
    '../eslint-config/index.js',
    './index.js',
  ].map(require.resolve),
};
