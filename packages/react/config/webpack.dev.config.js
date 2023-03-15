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
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 9000,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          "postcss-loader", // 添加环境前后文
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
      hash: false,
    }),
  ],
});
