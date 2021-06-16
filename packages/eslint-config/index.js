module.exports = {
  extends: [
    './purejs',
    './plugins/babel',
    './plugins/fuelrats',
  ].map(require.resolve),
}
