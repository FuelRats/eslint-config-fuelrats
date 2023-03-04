import { extensions as EcmaScriptExts, extensionsTS as TypeScriptExts } from './constants'

type AliasMap = [string, string][]

function aliasResolver (map: AliasMap, extensions: readonly string[]) {
  return {
    node: { extensions },
    alias: { map, extensions },
  }
}

export function withAliasResolver (map: AliasMap) {
  return aliasResolver(map, EcmaScriptExts)
}

export function withTSAliasResolver (map: AliasMap) {
  return aliasResolver(map, TypeScriptExts)
}
