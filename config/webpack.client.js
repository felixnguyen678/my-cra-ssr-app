// config/webpack.client.js
const path = require('path');

module.exports = {
  // Client-side Webpack configuration
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  // Add loaders and plugins as needed
};
