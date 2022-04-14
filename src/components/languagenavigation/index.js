const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/languagenavigation/v2/languagenavigation",
  description: "Default Policy for Language Navigation Component",
  policy: "policy_default",
  styles: require("./styles"),
  title: "Default Language Navigation Policy",

  attributes: {
    navigationRoot: "/content/aem-site-template-tailwind",
    structureDepth: 1,
  },
});
