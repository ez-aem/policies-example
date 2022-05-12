const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = [
  new ComponentPolicy({
    component: "core/wcm/components/experiencefragment/v1/experiencefragment",
    description: "Header Policy for Experience Fragment Component",
    policy: "policy_header",
    styles: require("./styles/site-elements"),
    title: "Header Experience Fragment Policy",

    attributes: {
      "cq:defaultElement": "header",
      "cq:styleDefaultClasses": "header",
      "cq:styleElement": "header",
    },
  }),
  new ComponentPolicy({
    component: "core/wcm/components/experiencefragment/v1/experiencefragment",
    description: "Footer Policy for Experience Fragment Component",
    policy: "policy_footer",
    styles: require("./styles/site-elements"),
    title: "Footer Policy for Experience Fragment",

    attributes: {
      "cq:defaultElement": "footer",
      "cq:styleDefaultClasses": "footer",
      "cq:styleElement": "footer",
    },
  }),
  new ComponentPolicy({
    component: "core/wcm/components/experiencefragment/v1/experiencefragment",
    description: "Default Policy for Experience Fragment Component",
    policy: "policy_default",
    styles: require("./styles"),
    title: "Default Experience Fragment Policy",

    attributes: {},
  }),
  new ComponentPolicy({
    component: "cq/experience-fragments/components/xfpage",
    description: "Default Policy for Experience Fragment Component",
    policy: "policy_default",
    title: "Default Experience Fragment Policy",
    styles: require("./styles"),

    attributes: {
      clientlibs: [
        "PROJECTNAME.site"
      ],
    },
  }),
]; 
