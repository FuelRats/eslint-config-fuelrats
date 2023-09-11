import { AliasMap } from './types'
import { extList, extListTS } from '../_internal'

function aliasResolver (map: AliasMap, extensions: readonly string[]) {
  return {
    node: { extensions },
    alias: { map, extensions },
  }
}

export function withAliasResolver (map: AliasMap) {
  return aliasResolver(map, extList)
}

export function withTSAliasResolver (map: AliasMap) {
  return aliasResolver(map, extListTS)
}
