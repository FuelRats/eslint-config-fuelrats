import formattingConf from '../core/formatting'
import problemsConf from '../core/problems'
import suggestionsConf from '../core/suggestions'

const coreRules = {
  ...problemsConf.rules,
  ...suggestionsConf.rules,
  ...formattingConf.rules,
} as const

export default coreRules
