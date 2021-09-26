/* eslint-disable prefer-object-spread -- Assign is faster, and we also want some form of backwards compat just in case. */
module.exports = Object.assign(
  {},
  require('./plugins/babel').rules,
  require('./plugins/fuelrats').rules,
  require('./plugins/typescript-extensions').rules,
  require('./plugins/typescript').rules,
  require('./core/plugin-import').rules,
  require('./core/plugin-jsdoc').rules,
  require('./core/bestpractices').rules,
  require('./core/errors').rules,
  require('./core/es6').rules,
  require('./core/style').rules,
  require('./core/variables').rules,
)

