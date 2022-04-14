const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/contentfragment/v1/contentfragment",
  description: "Default Policy for Content Fragment Component",
  policy: "policy_default",
  styles: require("./styles"),
  title: "Default Content Fragment Policy",

  attributes: {},
});
