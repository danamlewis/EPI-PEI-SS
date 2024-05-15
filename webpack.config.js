const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Name of the output bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template file
      filename: 'index.html', // Output filename in the dist directory
      minify: false, // Disable HTML minification if necessary
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css', // Output CSS filename
    }),
    new webpack.DefinePlugin({
      'process.env.SECRET_URL': JSON.stringify(process.env.SECRET_URL),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Rule for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // Rule for CSS files
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
