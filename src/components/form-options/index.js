const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/form/options/v2/options",
  description: "Default Policy for Form Options Component",
  policy: "policy_default",
  styles: require("./styles"),
  title: "Default Form Options Policy",

  attributes: {},
});
