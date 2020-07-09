const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    writeToDisk: true,
  },
  entry: "./src/App.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [
          // 2) Load with style tag
          "style-loader",
          {
            // 1) First Read the css file, make it module, hash className
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
