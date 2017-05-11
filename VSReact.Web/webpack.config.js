/// <binding ProjectOpened='Hot, Watch - Development' />
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require('./package.json');

module.exports = {
  devServer: {
    contentBase: './build',
    host: 'localhost',
    port: 3000
  },
  entry: [
        // must be first entry to properly set public path
        './app/webpack-public-path',
        //'webpack-hot-middleware/client?reload=true',
        //'webpack-dev-server/client?http://localhost:3000',
        //'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.resolve(__dirname, 'app/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  output: {
      path: path.join(__dirname, 'build'),
      publicPath: '/',
      filename: '[name].js'
  },
  plugins: [
      new webpack.DefinePlugin({
          __API_URL__: JSON.stringify(process.env.API_URL || '//localhost:51407')
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
          template: 'index.html'
      }),
  ],
  module: {
      rules: [
          { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
          { test: /(\.css)$/, loaders: ['style-loader', 'css-loader?sourceMap'] }
      ]
  }
};
