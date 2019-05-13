const path = require("path");
const Configs = require("./configs");

const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const GeneratePackageJson = require("generate-package-json-webpack-plugin");

module.exports = {
  entry: [path.resolve("./src/")],
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
          loader: "file-loader",
          options: {
            configFile: path.resolve("./config/tsconfig.json")
          }
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
  mode: "production",
  plugins: [
    new GeneratePackageJson(Configs.PackageValues, Configs.PackageFilename),
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
    })
  ],
  externals: {
    react: "commonjs react"
  }
};
