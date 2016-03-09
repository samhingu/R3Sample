var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
    context: path.join(__dirname, './app'),
    entry:{
        app: './index.jsx',
         vendor: ['react'],
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015', 'react'] } }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: path.join(__dirname , 'app/index.html'),
        }),
         new uglifyJsPlugin({
            compress: {
                warnings: false
            }
         }),
          new OpenBrowserPlugin({
            url: 'http://localhost:8080'
          }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
     ]
};