const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require("copy-webpack-plugin");
// require('dotenv').config();

module.exports = {
  target: 'web',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: true},
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|webp|jpeg|gif|woff|woff2|eot|ttf|otf|json|hdr|mp4|webm|mov)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
