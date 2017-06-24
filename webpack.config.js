var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var copyPlugin = require('copy-webpack-plugin');
var extractPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

const root = `${__dirname}/src`;
const dist = `${__dirname}/dist`;

const paths = {
  app: `${root}/app/root.module.js`,
  styles: `${root}/styles`,
  static: {
    index: `${root}/index.html`,
    manifest: `${root}/manifest.json`,
    serviceworker: `${root}/service-worker.js`,
    images: `${root}/img`,
    styles: `${root}/styles`,
    fonts: `${root}/fonts`,
  },
};

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['babel-polyfill', path.join(__dirname, 'src', 'app/root.module.js') ],
  },
  module: {
    loaders: [
      
        { test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate-loader!babel-loader' },
        {
          test: /\.html$/,
          loader: 'ngtemplate-loader!html-loader'
        },

        { test: /\.(scss|sass)$/, 
          use: [{
                  loader: "style-loader"
              }, {
                  loader: "css-loader"
              }, {
                  loader: "sass-loader",
                  options: {
                      includePaths: [paths.styles],
                  }
              }] },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=src/public/fonts/[name].[ext]' },
    ]
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      inject: 'body',
      chunks: ['app']
    }),

    new copyPlugin([{
        from: paths.static.index,
      }, {
        from: paths.static.manifest,
      },{
        from: paths.static.serviceworker,
      }, {
        from: paths.static.images,
        to: 'img/',
        flatten: true,
      }, {
        from: paths.static.styles,
        to: 'styles/',
        flatten: true,
      },{
        from: paths.static.fonts,
        to: 'fonts/',
    }]),
    
  ]
};