import { sArg } from '@fuelrats/eslint-config/util/internal'

export = {
  extends: [
    '../eslint-config/index.js',
    './index.js',
  ].map(sArg(require.resolve)),
}
