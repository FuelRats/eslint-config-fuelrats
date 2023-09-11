import formattingConf from './formatting'
import eslintCommentsConf from './plugin-eslint-comments'
import importConf from './plugin-import'
import jsdocConf from './plugin-jsdoc'
import problemsConf from './problems'
import suggestionsConf from './suggestions'

export const coreRules = {
  ...formattingConf.rules,
  ...problemsConf.rules,
  ...suggestionsConf.rules,
  ...eslintCommentsConf.rules,
  ...importConf.rules,
  ...jsdocConf.rules,
} as const
