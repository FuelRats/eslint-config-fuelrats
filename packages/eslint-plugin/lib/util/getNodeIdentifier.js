/**
 * @param {object} node any ASTNode with an Identifier or an Identifier itself
 * @returns {object} Identifier
 */
function getNodeIdentifier (node) {
  if (node.type === 'Identifier') {
    return node;
  }

  if (node.id && node.id.type === 'Identifier') {
    return node.id;
  }

  return undefined;
}





module.exports = getNodeIdentifier;
