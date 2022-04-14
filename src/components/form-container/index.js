const { ComponentPolicy } = require("@ez-aem/policies");
const { content, form } = require("../components");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/form/container/v2/container",
  description: "Default Policy for Form Container Component",
  policy: "policy_default",
  styles: require("./styles"),
  title: "Default Form Container Policy",

  attributes: {
    components: [...content, ...form],
  },
});
