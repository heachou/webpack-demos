const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const rules = require('./rules')

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, '../build'),
  },
  module: {
    rules,
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../index.html'),
    }),
  ],
}
