const path = require("path");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: ["./src/index.js", "./src/website_builder/page-builder.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
