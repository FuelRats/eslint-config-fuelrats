module.exports = {
  extends: [
    './core/plugin-react',
    './core/plugin-react-jsx',
    './core/plugin-react-hooks',
    './core/plugin-jsx-a11y',
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
};
