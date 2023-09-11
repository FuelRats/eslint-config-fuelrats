// @ts-check
/* eslint-disable import/no-extraneous-dependencies -- dev only script */
import chalk from 'chalk'
import { sync as parser } from 'conventional-commits-parser'
/* eslint-enable import/no-extraneous-dependencies */

import clintConfig from '../.clint-config.mjs'

let errorCount = 0
const output = [''] // start with an empty line

/**
 * @typedef {(ctx: ConfigSection) => void | Promise<void>} CheckMessageFn
 */

/**
 * @typedef {object} Check
 * @property {CheckMessageFn} message
 * @property {() => any} test
 */

/**
 * @typedef {object} ConfigSection
 * @property {string} name
 * @property {Check[]} checks
 */

/**
 * @typedef {object} CLintConfigCtx
 * @property {import('conventional-commits-parser').Commit} commit
 * @property {string} rawCommit
 * @property {typeof logger} logger
 */

/**
 * @typedef {(ctx: CLintConfigCtx) => ConfigSection[] | Promise<ConfigSection[]>} RuleResolveFn
 */

/**
 * @typedef {object} CLintConfig
 * @property {RuleResolveFn} commit
 * @property {RuleResolveFn} [revert]
 * @property {RuleResolveFn} [merge]
 * @property {import('conventional-commits-parser').Options} [parserOptions]
 */

/**
 * @typedef {object} LineWrapOpts
 * @param {string} [opts.blockIndentStr] Prepended to every line. Defaults to 4 spaces.
 * @param {string} [opts.indentStr] Prepended after `blockIndentStr` to every subsequent line after the first. Defaults to 4 spaces.
 * @param {number} [opts.maxLen] The max length of a line. Defaults `to process.stdout.columns` or 80.
 */

/**
 * re-wraps a string to fit within a max length.
 * @param {string} value the string to wrap
 * @param {LineWrapOpts} [opts]
 * @returns {string}
 */
const lineWrap = (value, {
  blockIndentStr = '',
  indentStr = ' '.repeat(4),
  maxLen = process.stdout.columns ?? 80,
} = {}) => {
  const startingStr = value.replace(/\s*\n\s*/ug, ' ').trim()

  if ((blockIndentStr.length + startingStr.length) <= maxLen) {
    return `${blockIndentStr}${startingStr}`
  }

  const words = startingStr.split(' ')
  let line = `${blockIndentStr}${words.shift()}`
  const lines = words.reduce((acc, word) => {
    const wordLen = word.length
    if (wordLen > 0) {
      if ((line.length + wordLen) > maxLen) {
        acc.push(line)
        line = `${blockIndentStr}${indentStr}${word}`
      } else {
        line += ` ${word}`
      }
    }
    return acc
  }, /** @type {string[]} */([]))
  lines.push(line)

  return lines.join('\n')
}

/**
 * @param {string | string[]} message
 * @returns {string}
 */
const joinMessage = (message) => (Array.isArray(message) ? message.join(' ') : message)

/**
 *
 * @param {(string|string[])[]} lines
 * @param {LineWrapOpts} opts
 */
const log = (lines, opts) => {
  output.push(
    ...lines.map((newLine) => lineWrap(joinMessage(newLine), opts)),
    '',
  )
}

/**
 * @param {string | string[]} errorMsg
 * @param {...(string | string[])} args
 * @returns {CheckMessageFn}
 */
const logError = (errorMsg, ...args) => (ctx) => {
  errorCount += 1
  output.push(chalk.underline(`❌ ${ctx.name}: ${chalk.red(joinMessage(errorMsg))}`))
  log(args, { blockIndentStr: ' '.repeat(4) })
}

/**
 * @param {string | string[]} msg
 * @param {...(string | string[])} args
 * @returns {CheckMessageFn}
 */
const logWarning = (msg, ...args) => (ctx) => {
  output.push(
    chalk.underline(`⚠️ ${ctx.name}: ${chalk.yellow(joinMessage(msg))}`),
  )
  log(args, { blockIndentStr: ' '.repeat(4) })
}


const logger = {
  errors: {
    /**
     * @returns {CheckMessageFn}
     */
    isRequired: () => logError('is required'),
    /**
     * @param {string | string[]} errMsg
     * @param {string[]} values
     * @param {string | null | undefined} foundVal
     * @returns {CheckMessageFn}
     */
    mustBeEnum: (errMsg, values, foundVal) => logError(
      errMsg,
      [chalk.green('Expected:'), values.map((value) => `"${value}"`).join(', ')],
      [chalk.red('Found:'), JSON.stringify(foundVal)],
    ),
    /**
     * @param {number} maxLen
     * @param {number} len
     * @returns {CheckMessageFn}
     */
    tooLong: (maxLen, len) => logError(
      'is too long',
      [chalk.green('Max Length:'), String(maxLen)],
      [chalk.red('Found:'), String(len)],
    ),
  },
  error: logError,
  warn: logWarning,
}


const [rawCommit] = process.argv.slice(2)


const commit = parser(rawCommit, clintConfig.parserOptions ?? {})

/**
 * @param {RuleResolveFn | undefined} checkFn
 */
const runChecks = async (checkFn) => {
  const sections = await checkFn?.({ commit, rawCommit, logger })
  const runningChecks = []
  sections?.forEach((sectionCtx) => {
    sectionCtx.checks.forEach((check) => {
      runningChecks.push((async () => {
        if (typeof check.test === 'function') {
          if (await check.test()) {
            await check.message?.(sectionCtx)
          }
        } else {
          await check.message?.(sectionCtx)
        }
      })())
    })
  })
}

if (commit.revert) {
  runChecks(clintConfig.revert)
} else if (commit.merge) {
  runChecks(clintConfig.merge)
} else {
  runChecks(clintConfig.commit)
}

if (errorCount > 0) {
  output.push(`Run ${chalk.cyanBright('`yarn commit`')} to get help generating a commit message.`)
} else {
  output.push(chalk.green('✅ Commit message is valid'))
}

// eslint-disable-next-line no-console -- dev only script
output.forEach((line) => console.log(line))
process.exit(errorCount > 0 ? 1 : 0)
