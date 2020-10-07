module.exports = {
  env: {
    browser: true,
  },
  extends: [
    './core/plugin-react',
    './core/plugin-react-jsx',
    './core/plugin-react-hooks',
    './core/plugin-jsx-a11y',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
