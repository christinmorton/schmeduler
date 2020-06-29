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
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
