const pkgJson = require('../../package.json');

function getRuleDocUrl (ruleName) {
  return `https://github.com/FuelRats/eslint-config-fuelrats/tree/v${pkgJson.version}/packages/eslint-plugin/docs/rules${ruleName ? `/${ruleName}` : ''}`;
}

module.exports = getRuleDocUrl;
