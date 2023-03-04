import { sArg } from '@fuelrats/eslint-config/util/internal'

export = {
  extends: [
    './shared',
  ].map(sArg(require.resolve)),
  parser: '@typescript-eslint/parser',
}
