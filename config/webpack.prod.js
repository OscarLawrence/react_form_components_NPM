const path = require("path");
const Configs = require("./configs");

const GeneratePackageJson = require("generate-package-json-webpack-plugin");

module.exports = {
  entry: [path.resolve("./src/index.ts")],
  output: {
    path: path.resolve("./dist"),
    filename: "index.js",
    publicPath: "/",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
  },
  externals: ["test"],
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: [/node_modules/],
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve("./config/tsconfig.json")
          }
        }
      }
    ]
  },
  mode: "production",
  plugins: [
    new GeneratePackageJson(Configs.PackageValues, Configs.PackageFilename)
  ],
  externals: {
    react: "commonjs react"
  }
};
