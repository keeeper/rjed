const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: ["./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[chunkhash].js',
  },

  devServer: {
    port: 3000,
    devMiddleware: {
      writeToDisk: true
    }
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HTMLWebpackPlugin({template: "./src/index.html"}),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ],

  performance: {
    hints: false
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: ["file-loader"]
      },
      {  
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: { 
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {  
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: { 
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
}