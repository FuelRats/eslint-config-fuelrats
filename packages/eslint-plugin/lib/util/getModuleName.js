const path = require('path')

/**
 * Extracts the module name from the file path.
 * @param {string} fileName
 * @returns {string} Fully resolved module name
 */
function getModuleName (fileName) {
  const parsedName = path.parse(path.resolve(fileName))
  const [baseFilename] = parsedName.name.split('.')

  if (baseFilename.toLowerCase() === 'index') {
    return parsedName.dir.split(path.sep).pop()
  }

  return baseFilename
}





module.exports = getModuleName
