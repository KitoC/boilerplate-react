const mainWebpackConfig = require("../webpack.config");

module.exports = async ({ config, mode }) => {
  return {
    ...config,
    module: mainWebpackConfig.module,
    resolve: mainWebpackConfig.resolve
  };
};
