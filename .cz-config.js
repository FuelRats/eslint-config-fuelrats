// @ts-check
const path = require('path')

const scopeGen = require('./lib/generate-scopes')

const configPath = (...paths) => path.resolve('packages', 'eslint-config', ...paths)

/**
 * A list of scopes that are allowed for the 'config' type.
 * Scopes are generated from the file structure of the `eslint-config` package.
 */
const configScopes = [
  // all configs in the root directory are of the 'preset' scope, and should be listed first.
  ...scopeGen.getScopesFromDirectory({ path: configPath(), prefix: 'preset', indexScope: 'default' }),
  // individual ruleset configs are sorted alphabetically below the presets.
  ...scopeGen.getScopesFromDirectories([
    // all core rule configs are of the 'core' scope, unless they are prefixed with 'plugin'.
    { path: configPath('core'), prefix: 'core', allowedPrefixes: ['core', 'plugin'] },
    // all plugin rule configs are of the 'plugin' scope.
    { path: configPath('plugins'), prefix: 'plugin' },
  ]).sort((aScope, bScope) => aScope.name.localeCompare(bScope.name)),
]

/**
 * A list of monorepo package scopes.
 */
const packageScopes = scopeGen.getScopesFromDirectory({
  path: path.resolve('./packages'),
  includeDirectories: true,
})

module.exports = {
  types: [
    {
      value: 'config',
      name: 'config:   ANY functional change to an individual config file.',
    },
    {
      value: 'feat',
      name: 'feat:     A new plugin feature, eslint-config utility, or architecture change.',
    },
    {
      value: 'fix',
      name: 'fix:      A bug fix to a package.',
    },
    {
      value: 'readme',
      name: 'readme:   A change to a README file.',
    },
    {
      value: 'docs',
      name: 'docs:     Documentation only changes. Never use this for README changes.',
    },
    {
      value: 'style',
      name: `style:    Changes that do not affect the meaning of the code.
            (white-space, formatting, missing semi-colons, etc)`,
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature.',
    },
    {
      value: 'test',
      name: 'test:     Any change to the test suite.',
    },
    {
      value: 'chore',
      name: `chore:    Changes to the build process or auxiliary tools and libraries such as
            documentation generation`,
    },
    {
      value: 'revert',
      name: 'revert:   Revert to a commit',
    },
  ],

  scopes: [
    { name: 'repo' },
    ...packageScopes,
  ],

  scopeOverrides: {
    config: configScopes,
  },

  messages: {
    type: "Select the type of change that you're committing:",
    scope: 'Denote the SCOPE of this change (optional):\n',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowBreakingChanges: ['feat', 'fix'],
  allowCustomScopes: false,
  allowTicketNumber: false,
  askForBreakingChangeFirst: false,
  subjectLimit: 100,
  usePreparedCommit: true,
}
