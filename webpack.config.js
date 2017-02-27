const path = require('path');
// path is a webpack object that has a method called resolve()

const config = {
  entry: './src/index.js', // Relative Path
  output: {
    path: path.resolve(__dirname, 'build'),
    // the resolve() function determines the Absolute Path
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        // Reg Expression to check if file ends with .js
        test: /\.js$/
      }
    ]
  }
};

module.exports = config;
