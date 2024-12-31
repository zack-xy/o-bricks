const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/index.js',
      // dependOn: 'react-vendor'
    },
    // 'react-vendor': 'react',
    test: {
      import: './src/test.js'
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    // publicPath: 'https://zackzheng.top/assets/',
    // 这个asset_702文件就是log.js打包之后的文件
    // log.js是异步的js1
    chunkFilename: 'asset_[id].js'  // asset_702.js
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {        
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      // 异步加载的css文件，比如在异步js中加载的css文件
      chunkFilename: '[name].css'
    })
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        // 匹配的是输出的文件
        // 只压缩输出的index.css
        test: /index\.css$/  
      })
    ]
  }
}

