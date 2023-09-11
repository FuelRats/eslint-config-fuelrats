/**
 * @file disallow public class members from sharing names with private members
 * @author Cameron Welter
 */
'use strict'

/*
 * ------------------------------------------------------------------------------
 * Requirements
 * ------------------------------------------------------------------------------
 */

const getRuleDocUrl = require('../util/getRuleDocUrl')

/*
 * ------------------------------------------------------------------------------
 * Rule Definition
 * ------------------------------------------------------------------------------
 */

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow public class members from sharing names with private members',
      category: 'Best Practices',
      recommended: false,
      url: getRuleDocUrl('no-mixed-access-class-members'),
      suggestion: true,
    },
    hasSuggestions: true,
    fixable: 'code',
    schema: [],
    messages: {
      noMixed: 'Unexpected mixed access class member. Public class members should not use private names.',
      noMixedSuggest: 'Replace `{{name}}` with `#{{name}}`',
    },
  },

  create (context) {
    const classStack = []

    function reportNoMixed (node) {
      context.report({
        node,
        messageId: 'noMixed',
        suggest: [
          {
            messageId: 'noMixedSuggest',
            data: {
              name: node.name,
            },
            fix (fixer) {
              return fixer.insertTextBefore(node, '#')
            },
          },
        ],
      })
    }

    function isPrivateType (node) {
      const isPrivateNodeType = ['ClassPrivateProperty', 'ClassPrivateMethod', 'PrivateName', 'PrivateIdentifier'].includes(node.type)
      const isPrivatePropertyDefinition = node.type === 'PropertyDefinition' && node.key?.type === 'PrivateIdentifier'
      return isPrivateNodeType || isPrivatePropertyDefinition
    }

    function getPrivateMemberName (node) {
      if (isPrivateType(node)) {
        return node.key?.id?.name ?? node.key?.name
      }
      return undefined
    }

    function enterClass (node) {
      let hasPrivate = false
      const staticNames = []
      const instanceNames = []

      if (node?.body?.body) {
        node.body.body.forEach((bodyNode) => {
          const name = getPrivateMemberName(bodyNode)
          if (name) {
            hasPrivate = true
            if (bodyNode.static) {
              staticNames.push(name)
            } else {
              instanceNames.push(name)
            }
          }
        })
      }

      classStack.push(hasPrivate && {
        name: node.id.name,
        staticNames,
        instanceNames,
      })
    }

    function exitClass () {
      classStack.pop()
    }

    function enterMember (node) {
      const classMeta = classStack[classStack.length - 1]

      if (!classMeta || isPrivateType(node.property)) {
        return
      }

      switch (node.object.type) {
        case 'ThisExpression':
          if (classMeta.instanceNames.includes(node.property.name)) {
            reportNoMixed(node.property)
          }
          break

        case 'Identifier':
          if (node.object.name === classMeta.name && classMeta.staticNames.includes(node.property.name)) {
            reportNoMixed(node.property)
          }
          break

        default:
          break
      }
    }

    return {
      'ClassDeclaration': enterClass,
      'ClassDeclaration:exit': exitClass,
      'ClassExpression': enterClass,
      'ClassExpression:exit': exitClass,
      'MemberExpression': enterMember,
    }
  },
}
