/**
 * @fileoverview disallow public class members to share names with private members
 * @author Cameron Welter
 */
"use strict";

const getRuleDocUrl = require('../../util/getRuleDocUrl')

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "disallow public class members to share names with private members",
            category: "Best Practices",
            recommended: true,
            url: getRuleDocUrl('no-mixed-access-class-members'),
            suggestion: true,
        },
        fixable: 'code',
        schema: [],
        messages: {
            noMixed: 'Unexpected mixed access class member. Public class members should not use private names.',
            noMixedSuggest: 'Replace `{{name}}` with `#{{name}}`',
        },
    },

    create: function(context) {
        const classStack = []

        function reportNoMixed (node) {
            context.report({
                node: node,
                messageId: 'noMixed',
                suggest : [
                    {
                        messageId: 'noMixedSuggest',
                        data: {
                            name: node.name,
                        },
                        fix (fixer) {
                            return fixer.insertTextBefore(node, '#');
                        }
                    }
                ],
            })
        }

        function isPrivateType (node) {
            return ['ClassPrivateProperty', 'ClassPrivateMethod', 'PrivateName'].includes(node.type)
        }

        function getPrivateMemberName (node) {
            return (
                isPrivateType(node)
                && node.key
                && node.key.id
                && node.key.id.name
            ) || undefined
        }

        function enterClass (node) {
            let hasPrivate = false
            const staticNames = []
            const instanceNames = []

            if (node.body && node.body.body) {
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
    }
};
