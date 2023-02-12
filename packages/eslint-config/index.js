module.exports = {
  extends: [
    './purejs',
    './plugins/babel',
  ].map(require.resolve),
};
