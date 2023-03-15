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
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack");
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
        test: /\.(png|jpe?g|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[hash][ext]",
        },
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: false,
    }),
    new VueLoaderPlugin(),
  ],
};
