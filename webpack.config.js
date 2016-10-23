const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: '#inline-source-map',
  stats: {
    colors: true
  },
  entry: {
    puyopuyo: './demo/index.js'
  },
  output: {
    path: path.join(__dirname, 'demo', 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      'puyo-puyo': path.join(__dirname, 'src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'demo'),
    host: '0.0.0.0',
    port: 3000,
    stats: {
      colors: true
    },
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: path.join(__dirname, 'node_modules')
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      exclude: path.join(__dirname, 'node_modules')
    }, {
      test: /\.svg$/,
      loader: 'svg-inline',
      exclude: path.join(__dirname, 'node_modules')
    }]
  }
}
