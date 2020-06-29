const commonPaths = require('./modules/common-paths');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: [/node_modules/, /app.js/],
      },
    ],
  },
};

module.exports = config;
