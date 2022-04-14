const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/form/text/v2/text",
  description: "Default Policy for Form Text Component",
  policy: "policy_default",
  styles: require("./styles"),
  title: "Default Form Text Policy",

  attributes: {},
});
