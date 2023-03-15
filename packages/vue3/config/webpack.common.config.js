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
const resolve = (dir) => path.join(__dirname, "..", dir);
const envMode = process.env.envMode;
require("dotenv").config({ path: `.env` });
require("dotenv").config({ path: `.env.${envMode}` });
const prefixRE = /^VUE_APP_/;
let env = {};
for (const key in process.env) {
  if (key == "NODE_ENV" || key == "BASE_URL" || prefixRE.test(key)) {
    env[key] = JSON.stringify(process.env[key]);
  }
}
module.exports = {
  stats: "errors-only", // 只报错时输出
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
    modules: [resolve("src"), "node_modules"],
    alias: {
      "~": resolve("src"),
    },
  },

  module: {
    rules: [
      // 图片
      {
        test: /\.(png|jpe?g|gif)$/,
        type: "asset", // 根据大小是否转换成 base 64
        generator: {
          // 输出位置和文件名
          filename: "assets/img/[hash][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024, // 限制 30kb
          },
        },
      },
      // 字体与svg
      {
        test: /\.(eot|svg|ttf|woff|woff2|)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash:8].[name][ext]",
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/plugin-transform-runtime"]],
            // 开启缓存
            cacheDirectory: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      "process.env": {
        ...env,
      },
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: false,
    }),
    new VueLoaderPlugin(),
  ],
};
