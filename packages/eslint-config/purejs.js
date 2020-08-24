module.exports = {
  env: {
    es6: true,
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
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  reportUnusedDisableDirectives: true,
}
