const importExtensions = require('./importExtensions');
const importExtensionsTypescript = require('./importExtensionsTypescript');

/**
 * @param {string[]} extensions
 * @param {[string,string][]} map
 * @returns {object} config object for ``
 */
function __aliasResolver (extensions, map) {
  return {
    node: { extensions },
    alias: { map, extensions },
  };
}


/**
 * @param {[string,string][]} map
 * @returns {object}
 */
function withAliasResolver (map) {
  return __aliasResolver(importExtensions, map);
}

/**
 * @param {[string,string][]} map
 * @returns {object}
 */
function withTSAliasResolver (map) {
  return __aliasResolver(importExtensionsTypescript, map);
}



module.exports = {
  withAliasResolver,
  withTSAliasResolver,
};
