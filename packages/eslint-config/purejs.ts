import { sArg } from './util/internal'

export = {
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
  ].map(sArg(require.resolve)),
  parserOptions: {
    sourceType: 'module',
  },
}
