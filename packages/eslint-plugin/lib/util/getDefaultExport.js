const getModuleName = require('./getModuleName');
const getNodeIdentifier = require('./getNodeIdentifier');

/**
 * @typedef {object} ExportData
 * @property {boolean?} expression boolean representing if the default export is an expression
 * @property {boolean?} external boolean represening if the default export is from an external module
 * @property {object} node Node to highlight on report
 * @property {string} name Name of the default export
 */

/**
 * @param {object} bodyNode ASTNode of type `ExportNamedDeclaration`
 * @returns {ExportData}
 */
function getExternalExportData (bodyNode) {
  return {
    external: true,
    node: bodyNode.source,
    name: getModuleName(bodyNode.source.value),
  };
}

/**
 * @param {object} identNode ASTNode of type `Identifier`
 * @returns {ExportData}
 */
function getIdentifierExportData (identNode) {
  return {
    node: identNode,
    name: identNode.name,
  };
}

function getExpressionExportData (node) {
  return {
    expression: true,
    node,
  };
}

/**
 * Extracts data about the default export of a Module.
 * @param {object} programNode ASTNode of type `Program`
 * @returns {ExportData|undefined}
 */
function getDefaultExport (programNode) {
  for (const bodyNode of programNode.body) {
    if (bodyNode.type === 'ExportDefaultDeclaration') {
      if (bodyNode.declaration.type.toLowerCase().includes('expression')) {
        return getExpressionExportData(bodyNode.declaration);
      }

      return getIdentifierExportData(getNodeIdentifier(bodyNode.declaration));
    }

    if (bodyNode.type === 'ExportNamedDeclaration') {
      for (const specifierNode of bodyNode.specifiers) {
        if (specifierNode.type === 'ExportDefaultSpecifier') {
          // export default from './Foo'
          return getExternalExportData(bodyNode);
        }

        if (specifierNode.type === 'ExportSpecifier' && getNodeIdentifier(specifierNode.exported).name === 'default') {
          const localImportNode = getNodeIdentifier(specifierNode.local);

          if (localImportNode.name === 'default') {
            // export { default } from './Foo'
            return getExternalExportData(bodyNode);
          }

          // export { Foo as default } from './Foo'
          return getIdentifierExportData(localImportNode);
        }
      }
    }
  }

  return undefined;
}





module.exports = getDefaultExport;

