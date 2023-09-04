// config/webpack.server.js
const path = require('path');

module.exports = {
  // Server-side Webpack configuration
  entry: './src/server.js',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build'),
  },
  // Add loaders and plugins for server-side rendering
};
