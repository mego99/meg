path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
    rules: [
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      }
    ],
  },
};
