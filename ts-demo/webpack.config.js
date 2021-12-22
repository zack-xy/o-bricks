const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: process.env ? process.env : 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 输出文件不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          // 配置babel
          {
            loader: 'babel-loader',
            // 设置babel
            options: {
              presets: [
                // 指定环境的插件
                [
                  "@babel/preset-env",
                  // 配置信息
                  {
                    targets: "> 0.25%, not dead",
                    "corejs": "3",
                    // 使用corejs的方式"usage"，表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader', // 相当于babeljs，转换浏览器兼容
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}