const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


const getPublicPath = env => {
  return env === 'development' ? '/' : './'
}

module.exports = env => {
  const config = {
    mode: env,
    entry: './src/index.js',
    output:{
        filename: '[name].[chunkhash:8].js',
        path: path.resolve(__dirname,'dist'),
        publicPath: getPublicPath(env)
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
          test: /\.(c|le)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader'
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
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin()
      ],
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
        filename: '[name].[chunkhash:8].css',
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