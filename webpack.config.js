const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = env => {
  const config = {
    mode: env,
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      port: 9000
    },
    target: 'web',
    stats: 'errors-only',
    module:{
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.md$/,
          use: [
            'html-loader',
            'markdown-loader'
          ]
        },
        {
          test:/\.(png|svg|jpg|gif)$/,
          use:[
            'file-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'My Resume',
        template: 'public/index.html',
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ]
  }

  if (env === 'development') {
    console.log('development')
  }

  if (env === 'production') {
    console.log('production')
  }

  return config
}