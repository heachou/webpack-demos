const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const rules = require('./rules')

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 8000,
    compress: true,
    clientLogLevel: 'silent',
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../index.html'),
    }),
  ],
  devtool: 'inline-source-map'
}
