module.exports = {
  plugins: [
    'import',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.json',
          '.jsx',
          '.mjs',
        ],
      },
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
    ],
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    /***************************************************************************\
      Static Analysis
    \***************************************************************************/

    /**
     * Ensure imports point to a file/module that can be resolved.
     */
    'import/no-unresolved': ['error', {
      commonjs: true,
      caseSensitive: true,
    }],


    /**
     * Ensure named imports correspond to a named export in the remote file.
     */
    'import/named': ['error'],


    /**
     * Ensure a default export is present, given a default import.
     */
    'import/default': ['error'],


    /**
     * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
     */
    'import/namespace': ['off'],


    /**
     * Restrict which files can be imported in a given folder
     */
    'import/no-restricted-paths': ['off'],


    /**
     * Forbid import of modules using absolute paths
     */
    'import/no-absolute-path': ['error'],


    /**
     * Forbid require() calls with expressions
     */
    'import/no-dynamic-require': ['error'],


    /**
     * Prevent importing the submodules of other modules
     */
    'import/no-internal-modules': ['off'],


    /**
     * Forbid webpack loader syntax in imports
     */
    'import/no-webpack-loader-syntax': ['error'],


    /**
     * Forbid a module from importing itself
     */
    'import/no-self-import': ['error'],


    /**
     * Forbid a module from importing a module with a dependency path back to itself
     */
    'import/no-cycle': ['error', {
      maxDepth: Infinity,
      ignoreExternal: true,
    }],


    /**
     * Prevent unnecessary path segments in import and require statements
     */
    'import/no-useless-path-segments': ['error', {
      noUselessIndex: true,
    }],


    /**
     * Forbid importing modules from parent directories
     */
    'import/no-relative-parent-imports': ['off'],


    /**
     * Forbid modules without any export, and exports not imported by any modules.
     */
    'import/no-unused-modules': ['off'],





    /***************************************************************************\
      Helpful warnings
    \***************************************************************************/

    /**
     * Report any invalid exports, i.e. re-export of the same name
     */
    'import/export': ['error'],


    /**
     * Report use of exported name as identifier of default export
     */
    'import/no-named-as-default': ['error'],


    /**
     * Report use of exported name as property of default export
     */
    'import/no-named-as-default-member': ['error'],


    /**
     * Report imported names marked with @deprecated documentation tag
     */
    'import/no-deprecated': ['error'],


    /**
     * Forbid the use of extraneous packages
     */
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__tests__/**', // jest pattern
        '**/__mocks__/**', // jest pattern
        'test.{js,jsx}', // repos with a single test file
        'test-*.{js,jsx}', // repos with multiple top-level test files
        '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
        '**/jest.config.js', // jest config
        '**/vue.config.js', // vue-cli config
        '**/webpack.config.js', // webpack config
        '**/webpack.config.*.js', // webpack config
        '**/rollup.config.js', // rollup config
        '**/rollup.config.*.js', // rollup config
        '**/gulpfile.js', // gulp config
        '**/gulpfile.*.js', // gulp config
        '**/Gruntfile{,.js}', // grunt config
        '**/protractor.conf.js', // protractor config
        '**/protractor.conf.*.js', // protractor config
      ],
      optionalDependencies: true,
      peerDependencies: false,
    }],


    /**
     * Forbid the use of mutable exports with var or let.
     */
    'import/no-mutable-exports': ['error'],





    /***************************************************************************\
      Module systems
    \***************************************************************************/

    /**
     * Report potentially ambiguous parse goal (script vs. module)
     */
    'import/unambiguous': ['off'],


    /**
     * Report CommonJS require calls and module.exports or exports.*.
     */
    'import/no-commonjs': ['off'],


    /**
     * Report AMD require and define calls.
     */
    'import/no-amd': ['error'],


    /**
     * No Node.js builtin modules.
     */
    'import/no-nodejs-modules': ['off'],





    /***************************************************************************\
      Style Guide
    \***************************************************************************/

    /**
     * Ensure all imports appear before other statements
     */
    'import/first': ['error'],


    /**
     * Ensure all exports appear after other statements
     */
    'import/exports-last': ['error'],


    /**
     * Report repeated import of the same module in multiple places
     */
    'import/no-duplicates': ['error', {
      considerQueryString: true,
    }],


    /**
     * Report namespace imports
     */
    'import/no-namespace': ['off'],


    /**
     * Ensure consistent use of file extension within the import path
     */
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    }],


    /**
     * Enforce a convention in module import order
     */
    'import/order': ['error', {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      groups: [
        [
          'builtin',
          'external',
        ],
        'internal',
        [
          'parent',
          'sibling',
          'index'
        ],
        'unknown',
      ],
      pathGroups: [
        {
          pattern: '~/**',
          group: 'internal',
        },
      ],
    }],


    /**
     * Enforce a newline after import statements
     */
    'import/newline-after-import': ['error'],


    /**
     * Prefer a default export if module exports a single name
     */
    'import/prefer-default-export': ['off'],


    /**
     * Limit the maximum number of dependencies a module can have
     */
    'import/max-dependencies': ['off'],


    /**
     * Forbid unassigned imports
     */
    'import/no-unassigned-import': ['error', {
      allow: [
        '**/*.css',
        '**/*.scss',
      ],
    }],


    /**
     * Forbid named default imports
     */
    'import/no-named-default': ['error'],


    /**
     * Forbid default exports
     */
    'import/no-default-export': ['off'],



    /**
     * Forbid named exports
     */
    'import/no-named-export': ['off'],


    /**
     * Forbid anonymous values as default exports
     */
    'import/no-anonymous-default-export': ['error'],


    /**
     * Prefer named exports to be grouped together in a single export declaration
     *
     * _DISABLED: This can be cumbersome and hinders maintainability in many use cases._
     */
    'import/group-exports': ['off'],


    /**
     * Enforce a leading comment with the webpackChunkName for dynamic imports
     *
     * _DISABLED: unused in our environments_
     */
    'import/dynamic-import-chunkname': ['off'],
  },
}
