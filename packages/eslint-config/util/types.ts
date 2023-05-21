export type RuleSeverity = 'error' | 'off' | 'warn' | 0 | 1 | 2

export type RuleConfig<OT extends any[] = any[]> = [RuleSeverity, ...OT]

export interface RuleSet {
  [key: string]: RuleConfig<any>
}

export type AliasMap = [string, string][]
