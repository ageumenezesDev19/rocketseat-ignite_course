// module.exports = {
//   entry: 'src/index.jsx',
// };

// Ou

const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const ReactRefreshWebPackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  // Isso de path é para garantir que vai rodar no Windows também pois no windows, navegasse nos diretórios
  // com o \\ ao invés do /.
  output: {
    path: path.resolve(__dirname, 'dist',),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebPackPlugin(),
    new htmlWebPackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ].filter(Boolean),
  module: {
    rules: [
        {
          test: /\.(j|t)sx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
               plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
               ].filter(Boolean), 
            }
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        }
    ],
  }
};
