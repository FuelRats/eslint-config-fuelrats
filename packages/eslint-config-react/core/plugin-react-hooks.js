module.exports = {
  plugins: [
    'react-hooks',
  ],
  rules: {
    /**
     * Enforce rules of hooks
     */
    'react-hooks/rules-of-hooks': ['error'],


    /**
     * Checks effect dependencies
     */
    'react-hooks/exhaustive-deps': ['warn', {
      additionalHooks: '^use.+(Callback|Effect)$',
    }],
  },
};
