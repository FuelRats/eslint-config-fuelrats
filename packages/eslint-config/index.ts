import { sArg } from './util/internal'

export = {
  extends: [
    './purejs',
    './plugins/babel',
  ].map(sArg(require.resolve)),
}
