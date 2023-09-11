export const propertyMaxPerLine = 5 as const

export const extList = [
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.json',
] as const

export const extListTS = [
  ...extList,
  '.ts',
  '.tsx',
  '.d.ts',
] as const
