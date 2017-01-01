var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, './app'),
  entry: [
    './js/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
