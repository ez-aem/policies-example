const { CQStyleGroups } = require("@ez-aem/policies");

module.exports = new CQStyleGroups([
  // require("./preset"),
  require("../../teaser/styles/variants"),
  require("../../_common/justify-self"),
  require("../../_common/align-self"),
]);
