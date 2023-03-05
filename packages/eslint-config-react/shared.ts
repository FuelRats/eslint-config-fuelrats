import { sArg } from './util/internal'

export = {
  extends: [
    './core/plugin-react',
    './core/plugin-react-jsx',
    './core/plugin-react-hooks',
    './core/plugin-jsx-a11y',
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
