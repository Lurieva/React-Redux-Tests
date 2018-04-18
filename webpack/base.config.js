const webpack = require('webpack');
const path = require('path');
const rules = require('./rules');

module.exports = {
    entry: ['./src/index.js'],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules
    }
};