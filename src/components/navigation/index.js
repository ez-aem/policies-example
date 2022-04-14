const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/navigation/v2/navigation",
  description: "Default Policy for Navigation Component",
  policy: "policy_default",
  styles: require("./styles"),
  title: "Default Navigation Policy",

  attributes: {
    collectAllPages: true,
    disableShadowing: false,
    navigationRoot: "/content/aem-site-template-tailwind",
    structureStart: 1,
  }
});
