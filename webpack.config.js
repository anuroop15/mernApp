"use strict";

const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,	
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader'],
      // query: {
      //   cacheDirectory: 'babel_cache',
      //   //presets: debug ? ['react', 'es2016', 'react-hmre'] : ['react', 'es2016']
      //   presets: ['react', 'es2016']
      // }
    }]
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
}