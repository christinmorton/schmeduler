const path = require('path');
const webpack = require('webpack');
const commonPaths = require('./modules/common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: commonPaths.appEntry,
  output: {
    // filename: '[chunkhash].bundle.js',
    filename: '[name].bundle.js',
    path: commonPaths.outputPath,
  },
  module: {
    rules: [
      {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 12000,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                indentWidth: 4,
                includePaths: [`${commonPaths.src}/scss/abstracts/*.scss`],
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      title: 'MicorPost',
      filename: 'index.html',
      template: commonPaths.src + 'index.html',
      inject: 'body',
    }),
  ],
};

module.exports = config;
