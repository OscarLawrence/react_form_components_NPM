const path = require("path");

const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HTMLwebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [path.resolve("./src/dev.tsx")],
  output: {
    path: path.resolve("./dev/"),
    filename: "client.bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
        options: {
          configFile: path.resolve("./config/tsconfig.dev.json")
        }
      }
    ]
  },
  mode: "development",
  plugins: [
    new HTMLwebpackPlugin({
      template: path.resolve("./src/template.html"),
      inject: true
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dev"] }
    })
  ]
};
