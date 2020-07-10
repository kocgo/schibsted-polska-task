const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    writeToDisk: true,
  },
  entry: "./src/index.js",
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
        oneOf: [
          {
            resourceQuery: /raw/,
            use: ["style-loader", "css-loader"],
          },
          {
            use: [
              // 2) Load with style tag
              "style-loader",
              {
                // 1) First Read the css file, make it module, hash className
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName:
                      "[path]___[name]__[local]___[hash:base64:5]",
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "dist", to: path.resolve(__dirname, "../docs") }],
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
