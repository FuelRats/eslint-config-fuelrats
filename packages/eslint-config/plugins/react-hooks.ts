export = {
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
    'react-hooks/exhaustive-deps': ['error', {
      additionalHooks: '^use.+(Callback|Effect|Event)$',
    }],
  },
} as const
