var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const CleanPlugin = require('clean-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, '../app'),
    build: path.join(__dirname, './dist')
};

module.exports = {
    context: PATHS.app,
    entry: {
        app: './index.jsx',
        vendor: ['react'],
    },
    output: {
        path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015', 'react'] } }
        ]
    },
    plugins: [
        new CleanPlugin([PATHS.build]),
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: path.join(PATHS.app, './index.html'),
        }),
        new ExtractTextPlugin('styles/[name].css', {
            allChunks: true
        }),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js'),
        // Setting DefinePlugin affects React library size!
        // DefinePlugin replaces content "as is" so we need some extra quotes
        // for the generated code to make sense
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'

            // You can set this to JSON.stringify('development') for your
            // development target to force NODE_ENV to development mode
            // no matter what
        })
    ]
};