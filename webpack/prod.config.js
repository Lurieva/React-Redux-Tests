const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    output: {
        publicPath: './',
        path: path.resolve(__dirname, '../build'),
        filename: '[chunkhash].js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new WebpackCleanupPlugin(),
        new CopyWebpackPlugin([{
            from: './src/index.html',
            to: '',
        }]),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Movies React',
            template: './src/index.html',
            files: {
                js: ['bundle.js'],
            },
        }),
    ],
    optimization: {
        namedModules: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2
                }
            }
        },
        noEmitOnErrors: true,
        concatenateModules: true
    }
});