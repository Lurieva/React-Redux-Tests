const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    output: {
        publicPath: './',
        path: path.resolve(__dirname, '../build'),
        filename: '[chunkhash].js',
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new CopyWebpackPlugin([{
            from: './src/index.html',
            to: '',
        }]),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true,
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            files: {
                js: ['bundle.js'],
            },
        }),
    ]
});