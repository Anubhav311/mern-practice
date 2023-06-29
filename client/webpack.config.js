const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
// const copyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: "./src/index.tsx", // denotes the entry point of the app
  resolve: {
    // With this you don't have to mention extensions of files while importing them. (App.tsx)
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        use: [
          {
            loader: "babel-loader",
          },
        ],
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: 'popup.html',
      // template: path.resolve('./src/popup.html'),
      // chunks: ['popup'],
      template: path.resolve("./src/index.html"),
    }),
    // new copyPlugin({
    //   patterns: [
    // { from: path.resolve('src/react.png'), to: path.resolve('build') },
    // { from: path.resolve(''), to: path.resolve('build') },
    //   ],
    // }),
    new Dotenv({
      systemvars: true, // without this, it won't pick up env variables sent on netlify
    }),
  ],
  stats: "errors-only",
  devServer: {
    // this helps you enter different urls in url bar of the browser
    historyApiFallback: true,
  },
  // watch: true,
};
