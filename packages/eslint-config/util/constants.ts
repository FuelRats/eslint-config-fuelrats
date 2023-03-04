export const propertyMaxPerLine = 5 as const

export const extensions = [
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.json',
] as const

export const extensionsTS = [
  ...extensions,
  '.ts',
  '.tsx',
  '.d.ts',
] as const
