const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
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
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            use: [
              // 2) Load with style tag
              MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "dist", to: path.resolve(__dirname, "../docs") }],
    }),
  ],
};
