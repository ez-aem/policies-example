const { CQStyleGroups } = require("@ez-aem/policies");

module.exports = new CQStyleGroups([
  require("./preset"),
  require("../../_common/grid-max-width"),
  require("../../_common/justify-self"),
  require("../../_common/align-self"),
]);
