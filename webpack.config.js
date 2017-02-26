const path = require('path');

const config = {
  entry: './src/index.js', // Relative Path
  output: {
    path: path.resolve(__dirname, 'build'), // Absolute Path
    filename: 'bundle.js'
  }
};

module.exports = config;
