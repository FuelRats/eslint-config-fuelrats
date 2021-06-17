/**
 * @file Enforces default exports are internally named the same as their module (file) name.
 * @author Cameron Welter
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const equalsIgnoreCase = require('../util/equalsIgnoreCase')
const getDefaultExport = require('../util/getDefaultExport')
const getModuleName = require('../util/getModuleName')
const getRuleDocUrl = require('../util/getRuleDocUrl')



// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforces default exports are internally named the same as their module (file) name.',
      category: 'Best Practices',
      recommended: false,
      url: getRuleDocUrl('default-export-matches-module-name'),
      suggestion: false,
    },
    // fixable: 'code'
    schema: [
      {
        type: 'object',
        properties: {
          caseInsensitive: {
            type: 'boolean',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      notMatchModuleName: 'Default export `{{exportName}}` should match module name `{{moduleName}}`.',
      externalNotMatchModuleName: 'Default export `{{exportName}}` should match external module name `{{moduleName}}`.',
    },
  },

  create (context) {
    const [
      args = {},
    ] = context.options

    const reportNotMatchModuleName = (node, exportName, moduleName, external) => {
      context.report({
        messageId: external
          ? 'externalNotMatchModuleName'
          : 'notMatchModuleName',
        node,
        data: {
          exportName,
          moduleName,
        },
      })
    }

    return {
      Program: (programNode) => {
        const moduleName = getModuleName(context.getFilename())
        const {
          expression: isExpression,
          external: isExternal,
          name: exportName,
          node: exportIdentNode,
        } = getDefaultExport(programNode) ?? {}

        if (isExpression) {
          // Fix this later, provide a report which encourages static export declarations
          return
        }

        if (exportIdentNode) {
          let doReport = moduleName !== exportName

          if (args.caseInsensitive) {
            doReport = !equalsIgnoreCase(moduleName, exportName)
          }

          if (doReport) {
            reportNotMatchModuleName(
              exportIdentNode,
              exportName,
              moduleName,
              isExternal,
            )
          }
        }
      },
    }
  },
}
