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
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
       {
      test: /\.(png|jpe?g|gif)$/i,
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images',
        limit: 8192,
      },
    },


    ],
  },
};



