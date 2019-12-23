const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.scss$/, //需要匹配的模块后缀名
      //   use: ['style-loader', 'css-loader', 'sass-loader'] //加载顺序从右往左
      // },
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          // 'style-loader', // 将样式注入html
          MiniCssExtractPlugin.loader,
           {
             loader: 'css-loader',
             options: {sourceMap: true} 
           },
           {
             loader: 'postcss-loader',
             options: {
               ident: 'postcss',
               sourceMap: true,
               plugins: loader => [
                 require('autoprefixer')()
               ]
             }
           },
           {
             loader: 'sass-loader',
             options: {sourceMap: true}
           }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new OptimizeCssAssetsPlugin({}),
    new UglifyJsPlugin({
      cache: true, //js不变化不压缩
      parallel: true, //并行压缩
      sourceMap: true
    })
  ]
}