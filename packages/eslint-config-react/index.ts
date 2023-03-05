import { sArg } from './util/internal'

export = {
  env: {
    browser: true,
  },
  extends: [
    './shared',
  ].map(sArg(require.resolve)),
  parser: '@babel/eslint-parser',
}
