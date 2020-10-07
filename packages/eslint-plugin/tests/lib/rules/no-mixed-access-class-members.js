/**
 * @fileoverview disallow public class members to share names with private members
 * @author Cameron Welter
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-mixed-access-class-members");
const RuleTester = require("../../../util/RuleTester");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const noMixedError = (name, output) => ({
    messageId: 'noMixed',
    suggestions: [{
        messageId: 'noMixedSuggest',
        data: { name },
        output,
    }]
})

var ruleTester = new RuleTester();

ruleTester.run("no-mixed-access-class-members", rule, {
    valid: [
        "class A { #foo = 'hello'; bar () { return this.#foo } }",
        "class A { #foo = 'hello'; bar () { this.#foo = 'bar' } }",
        "class A { #foo = 'hello'; baz = 'biz'; bar () { this.baz = 'baz' } }",
        "class A { static #foo = 'hello'; static baz = 'biz'; bar () { A.#foo = 'baz' } }",
        "class A { static #foo = 'hello'; static baz = 'biz'; bar () { A.baz = 'baz' } }",
        `class A {
            #foo = 'hello';
            bInst = new (
                class B {
                    #foo2 = 'hello world';
                    bar2 () {
                        return this.foo
                    }
                }
            )();
            bar () {
                return this.#foo
            }
        }`
    ],

    invalid: [
        {
            code: "class A { #foo = 'hello'; bar () { return this.foo } }",
            errors: [noMixedError('foo', "class A { #foo = 'hello'; bar () { return this.#foo } }")]
        },

        {
            code: "class A { static #foo = 'hello'; bar () { return A.foo } }",
            errors: [noMixedError('foo', "class A { static #foo = 'hello'; bar () { return A.#foo } }")]
        },

        {
            code: `class A {
                #foo = 'hello';
                bInst = new (
                    class B {
                        #foo2 = 'hello world';
                        bar2 () {
                            return this.foo2
                        }
                    }
                )();
                bar () {
                    return this.foo
                }
            }`,
            errors: [
            noMixedError('foo2', `class A {
                #foo = 'hello';
                bInst = new (
                    class B {
                        #foo2 = 'hello world';
                        bar2 () {
                            return this.#foo2
                        }
                    }
                )();
                bar () {
                    return this.foo
                }
            }`),
            noMixedError('foo', `class A {
                #foo = 'hello';
                bInst = new (
                    class B {
                        #foo2 = 'hello world';
                        bar2 () {
                            return this.foo2
                        }
                    }
                )();
                bar () {
                    return this.#foo
                }
            }`)
            ]
        }

    ]
});
