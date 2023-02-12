module.exports = {
  env: {
    es2022: true,
  },
  extends: [
    './core/formatting',
    './core/problems',
    './core/suggestions',
    './core/plugin-eslint-comments',
    './core/plugin-import',
    './core/plugin-jsdoc',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
  },
  reportUnusedDisableDirectives: true,
};
