/**
 * @author
 * @file webpack.dev.config.js
 * @fileBase webpack.dev.config
 * @path packages\react\config\webpack.dev.config.js
 * @from 
 * @desc 开发目标
 * - 实时重新加载
 * - 热模块替换
 * - source map
 * - localhost server
 * @todo

 *
 * @done
 * @example
 */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 9000,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false,
    }),
  ],
});

