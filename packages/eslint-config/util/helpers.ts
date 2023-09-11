import { RuleSet, RuleSeverity } from './types'


export type RuleInput = string | [string, ...any]

export interface RulesetBuilderConfig {
  error?: RuleInput[]
  warn?: RuleInput[]
  off?: string[]
}

function makeRuleset (severity: RuleSeverity, rules: RuleInput[]): RuleSet {
  return rules.reduce<RuleSet>((acc, rule) => {
    if (typeof rule === 'string') {
      acc[rule] = [severity]
    } else {
      const [ruleName, ...args] = rule
      acc[ruleName] = [severity, ...args]
    }

    return acc
  }, {})
}

/**
 * Helper to build a ruleset
 */
export const ruleset = {
  build: (config: RulesetBuilderConfig) => {
    return {
      ...(config.error && makeRuleset('error', config.error)),
      ...(config.warn && makeRuleset('warn', config.warn)),
      ...(config.off && makeRuleset('off', config.off)),
    }
  },
  error: (...newRules: RuleInput[]) => makeRuleset('error', newRules),
  warn: (...newRules: RuleInput[]) => makeRuleset('warn', newRules),
  off: (...newRules: string[]) => makeRuleset('off', newRules),
}
