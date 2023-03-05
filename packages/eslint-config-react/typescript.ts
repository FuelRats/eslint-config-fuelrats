import { sArg } from './util/internal'

export = {
  extends: [
    './shared',
  ].map(sArg(require.resolve)),
  parser: '@typescript-eslint/parser',
}
