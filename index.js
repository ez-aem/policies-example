const { generatePolicies } = require("@ez-aem/policies");

generatePolicies([
    require("./src/components/accordion"),
    require("./src/components/breadcrumb"),
    require("./src/components/button"),
    require("./src/components/carousel"),
    ...require("./src/components/container"),
    require("./src/components/download"),
    require("./src/components/embed"),
    ...require("./src/components/experiencefragment"),
    require("./src/components/form-button"),
    require("./src/components/form-container"),
    require("./src/components/image"),
    require("./src/components/languagenavigation"),
    require("./src/components/list"),
    require("./src/components/navigation"),
    require("./src/components/page"),
    require("./src/components/progressbar"),
    require("./src/components/search"),
    require("./src/components/separator"),
    require("./src/components/tabs"),
    require("./src/components/teaser"),
    require("./src/components/text"),
    require("./src/components/title"),
  ],
  "/src/main/content/jcr_root/conf/PROJECTNAME/settings/wcm/policies"
);