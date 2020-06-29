const path = require('path');
const commonConfig = require('./webpack/webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = (env) => {
  console.log(env);

  const envConfig = require(`./webpack/webpack.${env.env}.js`);

  return webpackMerge(commonConfig, envConfig);
};
