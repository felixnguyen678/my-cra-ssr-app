// config/webpack.server.js
const path = require('path');

module.exports = {
  // Server-side Webpack configuration
  entry: './src/server.js',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build/server'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },  
};
