const { override, addLessLoader } = require("customize-cra");

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#1DA57A" },
    },
    sourceMap: true,
  })
);
