const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    watchOptions: {
      poll: true,
      ignored: "/node_modules/"
    }
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  resolve: {
    modules: ["src", "node_modules"]
  },
  plugins: [
    // new CleanWebpackPlugin(["dist"]),
    // new UglifyJsPlugin({
    //   sourceMap: true,
    //   uglifyOptions: {
    //     ecma: 8,
    //     compress: {
    //       warnings: false
    //     }
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

module.exports = config;
