const { ComponentPolicy } = require("@ez-aem/policies");

module.exports = new ComponentPolicy({
  component: "core/wcm/components/pdfviewer/v1/pdfviewer",
  description: "Default Policy for PDF Viewer Component",
  policy: "policy_default",
  styles: require("./styles"),
  title: "Default PDF Viewer Policy",

  attributes: {},
});
