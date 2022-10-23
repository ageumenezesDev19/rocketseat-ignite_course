// module.exports = {
//   entry: 'src/index.jsx',
// };

// Ou

const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  // Isso para garantir que vai rodar no Windows também pois no windows, navegasse nos diretórios
  // com o \\ ao invés do /.
  output: {
    path: path.resolve(__dirname, 'dist',),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new htmlWebPackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ],
  module: {
    rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        }
    ],
  }
};
