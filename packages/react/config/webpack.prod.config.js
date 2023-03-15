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
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(common, {
  mode: "production",
  output: {
    // 清空dist
    clean: true,
    // 随机名称
    filename: "js/[name]-bundle-[hash:6].js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
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
    // css 重命名
    new MiniCssExtractPlugin({
      filename: "style/[name].[hash:6].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // css压缩
      new CssMinimizerPlugin(),
      // js压缩
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 屏蔽log
          },
        },
      }),
    ],
  },
});
