const path = require('path');
const commonPaths = require('./modules/common-paths');

console.log(commonPaths.outputPath);

const config = {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules/'),
          path.resolve(__dirname, 'app.js'),
          path.resolve(__dirname, 'src/'),
        ],
      },
    ],
  },
};

module.exports = config;
