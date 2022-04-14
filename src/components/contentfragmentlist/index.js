const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/contentfragmentlist/v2/contentfragmentlist",
  description: "Default Policy for Content Fragment List Component",
  policy: "policy_default",
  styles: require("./styles"),
  title: "Default Content Fragment List Policy",

  attributes: {},
});
