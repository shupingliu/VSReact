var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require('./package.json');

var outputFileTemplateSuffix = '-' + pkg.version;

const GLOBALS = {
    __API_URL__: JSON.stringify(process.env.API_URL || 'http://localhost:51407'),
    'process.env.NODE_ENV': JSON.stringify("production")
};

module.exports = {
  entry: './app/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]' + outputFileTemplateSuffix + '.js',
    chunkFilename: '[id]' + outputFileTemplateSuffix + '.js'
  },
  devServer: {
      contentBase: './dist'
  },
  plugins: [
      new webpack.DefinePlugin(GLOBALS),
      new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: {
      rules: [
          { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
          { test: /(\.css)$/, loaders: ['style-loader', 'css-loader?sourceMap'] },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
          { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000" },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
      ]
  }
};
