const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/form/button/v2/button",
  description: "Default Policy for Form Button Component",
  policy: "policy_default",
  styles: require("./styles"),
  title: "Default Form Button Policy",

  attributes: {},
});
