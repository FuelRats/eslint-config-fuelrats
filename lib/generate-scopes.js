// @ts-check
const nFS = require('fs')
const nPath = require('path')

/**
 * @typedef {object} Scope
 * @property {string} name The name of the scope.
 */

/**
 * @typedef {object} PathOpts
 * @property {string} path The path to the directory to generate scopes from.
 */

/**
 * @typedef {object} ScopeOpts
 * @property {string} [prefix] Default prefix to apply when scope does not have one. If not provided, no prefix will be applied.
 * @property {string[]} [allowedExtensions] When scope is a file, only include files with these extensions.
 * @property {string[]} [allowedPrefixes] The allowed prefixes for the given scope set, except for the default prefix.
 * @property {boolean} [includeDirectories] Include directories in the scope set.
 * @property {string | ((fileName: string | undefined) => string)} [indexScope] The scope to use for index files. Alternatively, a function may be provided.
 */

/**
 * @typedef {ScopeOpts & PathOpts} GenerateScopeOpts
 */

/**
 * @typedef {object} SanitizerOpts
 * @property {string[]} allowedPrefixes The allowed prefixes for the given scope set, except for the default prefix.
 */

/**
 * @param {GenerateScopeOpts & SanitizerOpts} conf
 * @returns {Scope | undefined}
 */
const getSanitizedScope = ({
  path,
  prefix,
  allowedExtensions = ['ts'],
  allowedPrefixes,
  includeDirectories = false,
  indexScope,
}) => {
  let fileName = nPath.basename(path)
  const fileStat = nFS.statSync(path)
  if (fileStat.isFile()) {
    const isIgnored = allowedExtensions.length > 0 && allowedExtensions.some((ext) => !fileName.endsWith(`.${ext}`))
    if (isIgnored) {
      return undefined
    }
  } else if (fileStat.isDirectory() && !includeDirectories) {
    return undefined
  }

  const isIndex = (new RegExp(`^index(\..*)*\.(${allowedExtensions.join('|').trim() || '.*'})$`, 'ui')).exec(fileName)
  if (isIndex) {
    const resolvedScope = typeof indexScope === 'function' ? indexScope(fileName) : indexScope
    if (!resolvedScope) {
      return undefined
    }

    fileName = resolvedScope
  }


  const scope = fileName
    .split('.')[0]
    .toLowerCase()
    .split('-')

  if (prefix && !allowedPrefixes.includes(scope[0])) {
    scope.unshift(prefix)
  }

  return {
    name: scope.join('-'),
  }
}

/**
 * @param {GenerateScopeOpts} opts
 * @returns {Scope[]}
 */
const getScopesFromDirectory = ({ allowedPrefixes = [], path, prefix, ...restOpts }) => {
  const finalPrefixes = prefix ? [prefix, ...allowedPrefixes] : allowedPrefixes
  return nFS.readdirSync(path).reduce(
    (acc, fileName) => {
      const scope = getSanitizedScope({
        path: nPath.resolve(path, fileName),
        prefix,
        allowedPrefixes: finalPrefixes,
        ...restOpts,
      })

      if (scope) {
        acc.push(scope)
      }

      return acc
    },
    /** @type {Scope[]} */([]),
  )
}

/**
 * Generates a list of scopes from the files in the given list of directories.
 *
 * @param {GenerateScopeOpts[]} directories
 * @param {ScopeOpts} [commonOpts]
 * @returns {Scope[]}
 */
const getScopesFromDirectories = (directories, commonOpts = {}) => directories?.reduce(
  (acc, dirOpts) => acc.concat(getScopesFromDirectory({ ...commonOpts, ...dirOpts })),
  /** @type {Scope[]} */([]),
)


module.exports = {
  getScopesFromDirectory,
  getScopesFromDirectories,
}
