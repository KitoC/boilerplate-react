const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const resolve = require("./webpack.config.resolve");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./dist/index.html",
  filename: "./index.html"
});

const CSSLoader = {
  loader: "css-loader",
  options: {
    modules: false,
    sourceMap: true
  }
};

const urlLoader = {
  loader: "url-loader",
  options: {
    limit: 8000,
    name: "images/[hash]-[name].[ext]"
  }
};

module.exports = {
  output: {
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [urlLoader]
      },
      {
        test: /\.css$/,
        use: ["style-loader", CSSLoader]
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    noInfo: true,
    port: 7117,
    historyApiFallback: true
  },
  resolve
};
