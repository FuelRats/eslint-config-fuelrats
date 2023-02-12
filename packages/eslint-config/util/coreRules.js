const { rules: formatRules } = require('../core/formatting');
const { rules: problemRules } = require('../core/problems');
const { rules: suggestionRules } = require('../core/suggestions');

module.exports = {
  ...problemRules,
  ...suggestionRules,
  ...formatRules,
};
