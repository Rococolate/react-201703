var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin') //分离css单独打包

module.exports = {
  //devtool: 'eval-source-map', //配置生成Source Maps,选择合适的选项
  //entry: __dirname + '/app/main.js' ,//唯一入口文件
  entry: path.resolve(__dirname,'./app/main.js'),
  output: {
    //path: __dirname + '/public', //打包后的文件存放地方
    path: path.resolve(__dirname,'./src'),
    filename: 'bundle.js' //打包后输出文件的文件名
  },

  module:{ //在配置文件里添加JSON loader
    loaders:[
      {
        test: /\.json$/,
        loader:'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      },
      {
        test:/\.css$/,
        //loader:'style-loader!css-loader' //添加对样式表的处理， 感叹号的作用是在于同一文件能够使用不同类型的loader
        loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      }
    ]

  },


  plugins: [
      new webpack.BannerPlugin('Copyright Flying Unicorns inc.'),
      new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'./app/index.tmp.html')
      }),
      new ExtractTextPlugin('style.css')
  ],

  // devServer: {
  //   contentBase: './public', //本地服务器所加载的页面所在的目录
  //   colors: true, // 终端中输出结果为彩色
  //   historyApiFallback: true,  // 不跳转
  //   inline: true,// 实时刷新
  //   port: 8080
  // }

}
