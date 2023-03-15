/**
 * @author
 * @file webpack.common.config.js
 * @fileBase webpack.common.config
 * @path packages\react\config\webpack.common.config.js
 * @from 
 * @desc 不重复原则
 * 这是通用的配置
 * @todo

 *
 * @done
 * @example
 */
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  // 别名
  resolve: {
    extensions: [".js", ".jsx", ".json", ".less", ".scss"],
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    alias: {
      "~": path.join(__dirname, "../src"),
      // _components: path.join(__dirname, "../src/components"),
      // _images: path.join(__dirname, "../src/images"),
      // _pages: path.join(__dirname, "../src/pages"),
      // _util: path.join(__dirname, "../src/util"),
      // _mock: path.join(__dirname, "../src/mock"),
    },
  },

  module: {
    rules: [
      // 图片
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              outputPath: "images",
              name: "[name].[hash:6].[ext]",
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      },
    ],
  },
};
