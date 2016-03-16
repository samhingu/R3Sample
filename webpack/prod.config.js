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
    progress: true,
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
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
            { test: /\.css$/, include: PATHS.app, loader: ExtractTextPlugin.extract("style", "css") },            
            { test: /\.(png|jpg)$/, include: PATHS.app, loader: 'url?limit=8192' },
            { test: /\.js[x]?$/, include: PATHS.app, loader: 'babel', query: { presets: ['es2015', 'react', 'stage-0'] } },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    resolve: {
        modulesDirectories: ['bower_components', 'node_modules'],
        extensions: ['', '.json', '.js', '.jsx']
    },
    plugins: [
        new CleanPlugin([PATHS.build], {
            verbose: false
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: path.join(PATHS.app, './index.html'),
        }),
        new ExtractTextPlugin('[name].[chunkhash].css', {
            allChunks: true
        }),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js'),
        // Setting DefinePlugin affects React library size!
        // DefinePlugin replaces content "as is" so we need some extra quotes
        // for the generated code to make sense
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            __API_URL__ : '"http://localhost:49756/"'
            // You can set this to JSON.stringify('development') for your
            // development target to force NODE_ENV to development mode
            // no matter what
        })
    ]
};