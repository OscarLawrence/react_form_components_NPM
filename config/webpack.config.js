const Paths = require("Paths");

const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = {
  entry: Paths.src,
  output: {
    path: Paths.BaseDir,
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
        options: {
          configFile: Paths.tsConfig
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
    new WebpackCleanupPlugin(),
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
  ]
};
