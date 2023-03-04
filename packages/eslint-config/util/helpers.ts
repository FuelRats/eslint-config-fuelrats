export type RuleSeverity = 'error' | 'off' | 'warn'

export type RuleConfig<OT extends any[] = any[]> = [RuleSeverity, ...OT]

/**
 * Disables a given set of rules
 */
export function disableRules (...rules: string[]): { [key: string]: RuleConfig<any> } {
  return rules.reduce<{ [key: string]: RuleConfig<any> }>((acc, rule) => {
    acc[rule] = ['off']
    return acc
  }, {})
}

/**
 * Sets the error level of a given rule to the given level
 */
export function setLevel<RC extends RuleConfig> ([_, ...args]: RC, level: RuleConfig[0]): RC {
  return [level, ...args] as RC
}

/**
 * Provides a modified rule config with an error level of 'error'. Accepts a rule name or rule config array.
 */
export function error <RC extends RuleConfig> (rule: RC): RC {
  return setLevel(rule, 'error')
}

/**
 * Provides a modified rule config with an error level of 'warn'. Accepts a rule name or rule config array.
 */
export function warn <RC extends RuleConfig> (rule: RC): RC {
  return setLevel(rule, 'warn')
}
