// @ts-check
// eslint-disable-next-line import/no-extraneous-dependencies -- dev only
import chalk from 'chalk'

import czConfig from './.cz-config.js'

/** @type {import('./lib/commit-lint.mjs').CLintConfig} */
const clintrc = {
  parserOptions: {
    mergePattern: /^merge/iu,
    revertPattern: /^revert/iu,
  },
  commit: ({ commit, logger }) => {
    const scopesForType = (commit.type && czConfig.scopeOverrides[commit.type]) || czConfig.scopes

    return [
      {
        name: 'Type',
        checks: [
          {
            message: logger.errors.isRequired(),
            test: () => !commit.type,
          },
          {
            message: logger.errors.mustBeEnum(
              'must be a valid type',
              czConfig.types.map((type) => type.value),
              commit.type,
            ),
            test: () => !commit.type || !czConfig.types.find((type) => type.value === commit.type),
          },
        ],
      },
      {
        name: 'Scope',
        checks: [
          {
            message: logger.errors.isRequired(),
            test: () => !commit.scope || commit.scope.length === 0,
          },
          {
            message: logger.errors.mustBeEnum(
              ['must be a valid scope for', `"${chalk.red(commit.type)}"`, 'type'],
              scopesForType.map((scope) => scope.name),
              commit.scope,
            ),
            test: () => !commit.scope || !scopesForType.find((scope) => scope.name === commit.scope),
          },
        ],
      },
      {
        name: 'Subject',
        checks: [
          {
            message: logger.errors.isRequired(),
            test: () => !commit.subject,
          },
          {
            message: logger.errors.tooLong(czConfig.subjectLimit, commit.subject?.trim().length || 0),
            test: () => commit.subject && commit.subject.trim().length > czConfig.subjectLimit,
          },
          {
            message: logger.error('must not end with punctuation'),
            test: () => commit.subject && /[.?!]$/u.test(commit.subject),
          },
        ],
      },
      {
        name: 'Breaking Changes',
        checks: [
          {
            message: logger.error(
              'must be a commit of type',
              Array.isArray(czConfig.allowBreakingChanges)
                ? czConfig.allowBreakingChanges.map((type) => `"${type}"`).join(', ')
                : '',
            ),
            test: () => {
              if (
                Boolean(commit.notes?.length)
                && Array.isArray(czConfig.allowBreakingChanges)
              ) {
                return !czConfig.allowBreakingChanges.find(
                  (type) => commit.type?.toLowerCase() === type.toLowerCase(),
                )
              }

              return false
            },
          },
        ],
      },
    ]
  },
}

export default clintrc
