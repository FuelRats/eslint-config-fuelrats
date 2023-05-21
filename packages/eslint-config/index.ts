import { sArg } from './_internal'

export = {
  extends: [
    './purejs',
    './plugins/babel',
  ].map(sArg(require.resolve)),
}
