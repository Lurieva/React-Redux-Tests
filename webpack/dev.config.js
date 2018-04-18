const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const baseConfig = require('./base.config.js');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';

module.exports = merge(baseConfig, {
    entry: [
        'react-hot-loader/patch'
    ],
    devtool: 'eval-source-map',
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './dist',
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            title: 'Movies React',
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
});