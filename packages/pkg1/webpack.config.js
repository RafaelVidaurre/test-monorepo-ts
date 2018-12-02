const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const DeclarationBundlerPlugin = require("declaration-bundler-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "@ryancavanaugh": path.resolve(__dirname, "node_modules/@ryancavanaugh")
    },
    plugins: [
      new TsconfigPathsPlugin(),
      new DeclarationBundlerPlugin({
        moduleName: "pkg3"
      })
    ]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "lib")
  }
};
