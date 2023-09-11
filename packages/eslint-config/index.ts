import { sArg } from './_internal'

export = {
  extends: [
    './purejs',
    './plugins/ext-babel',
  ].map(sArg(require.resolve)),
}
