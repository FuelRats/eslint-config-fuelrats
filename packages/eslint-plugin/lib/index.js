/**
 * @fileoverview Special rules made for our configs
 * @author Cameron Welter
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  rulesConfig: {
    'no-mixed-access-class-members': 'error',
  },
}
