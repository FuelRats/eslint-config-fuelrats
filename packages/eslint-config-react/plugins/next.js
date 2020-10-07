module.exports = {
  plugins: [
    '@next/eslint-plugin-next',
  ],
  rules: {
    'next/missing-preload': ['error'],

    'next/no-css-tags': ['error'],

    'next/no-html-link-for-pages': ['error'],

    'next/no-sync-scripts': ['error'],

    'next/no-unwanted-polyfillio': ['error'],
  },
}
