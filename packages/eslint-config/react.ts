import { sArg } from './util/internal'

export = {
  env: {
    browser: true,
  },
  extends: [
    './plugins/react',
    './plugins/react-jsx',
    './plugins/react-hooks',
    './plugins/jsx-a11y',
  ].map(sArg(require.resolve)),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
