const path = require("path");

const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
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
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name].[hash:8].[ext]"
            }
          },
          {
            loader: "image-webpack-loader"
          }
        ]
      }
    ]
  },
  mode: "development",
  plugins: [
    new HTMLwebpackPlugin({
      template: path.resolve("./src/template.html"),
      inject: true
    }),
    new ImageminWebpWebpackPlugin({
      mozjpeg: {
        progressive: true,
        quality: 65
      },
      optipng: {
        enabled: true
      },
      pngquant: {
        quality: "65-90",
        speed: 4
      },
      gifsicle: {
        interlaced: false
      },
      webp: {
        quality: 75
      }
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dev"] }
    })
  ]
};
