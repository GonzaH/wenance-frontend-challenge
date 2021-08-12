const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    exclude: /node_modules/,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }
];

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/'
  },
  module: { rules },
  mode: 'development',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })]
};
