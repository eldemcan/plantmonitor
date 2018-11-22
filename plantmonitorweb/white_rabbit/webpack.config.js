/**
 * Webpack configuration used to compile engine assets and save them for sprockets.
 */

const path = require('path')

module.exports = {
  entry: {
    'white_rabbit': path.resolve(__dirname, 'app/javascript/white_rabbit/white_rabbit.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'app/assets/javascripts'),
    library: 'white_rabbit',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
}