module.exports = {
  env: {
    es2020: true,
  },
  extends: [
    './core/bestpractices',
    './core/errors',
    './core/es6',
    './core/style',
    './core/variables',
    './core/plugin-import',
    './core/plugin-jsdoc',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
  },
  reportUnusedDisableDirectives: true,
}
