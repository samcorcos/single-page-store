const path = require('path');

module.exports = {
  entry: {
    app: './app/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.js$/,
        loaders: ['babel?cacheDirectory'],
        include: path.join(__dirname, 'app')
      }
    ]
  }
};
