/**
 * @author
 * @file webpack.prod.config.js
 * @fileBase webpack.prod.config
 * @path packages\react\config\webpack.prod.config.js
 * @from 
 * @desc 
 * 更小的bundle
 * 更轻量的 source map
 * 更优化的资源
 * 改善加载时间
 * @todo

 *
 * @done
 * @example
 */

const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      // html
      template: "public/index.html",
      // 打包后的 html 文件名
      filename: "index.html",
      // 将 js 注入 body 最底部
      inject: "body",
      // 压缩 html 文件的配置
      minify: {
        // 去除注释
        removeComments: true,
      },
    }),
    // 清空dist
    new CleanWebpackPlugin(),
  ],
  output: {
    // 随机名称
    filename: "js/[name]-bundle-[hash:6].js",
  },
});
