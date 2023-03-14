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

module.exports = merge(common, {
  mode: "production",
});
