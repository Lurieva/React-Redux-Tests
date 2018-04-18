const webpack = require('webpack');
const rules = require('./rules');

module.exports = {
    entry: ['./src/index.js'],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules
    },
    performance: {
        hints: false
    }
};