module.exports = {
  env: {
    browser: true,
  },
  extends: [
    '../eslint-config',
    './rules/plugin-react',
    './rules/plugin-react-jsx',
    './rules/plugin-react-hooks',
    './rules/plugin-jsx-a11y',
  ].map(require.resolve),
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
