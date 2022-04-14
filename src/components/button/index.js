const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/button/v2/button",
  description: "Default Policy for Button Component",
  policy: "policy_default",
  styles: require("./styles"),
  title: "Default Button Policy",

  attributes: {},
});
