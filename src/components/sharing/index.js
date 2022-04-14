const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/sharing/v1/sharing",
  description: "Default Policy for Sharing Component",
  policy: "policy_default",
  styles: require("./styles"),
  title: "Default Sharing Policy",

  attributes: {},
});
