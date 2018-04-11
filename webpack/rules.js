module.exports = [
    {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    },
    {
        test: /\.scss$/,
        use: [
            { loader: "style-loader" }, 
            { loader: "css-loader" }, 
            { loader: "sass-loader" }
        ]
    },
    {
        test: /\.css$/,
        use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
        ]
    },
    {
        test: /\.(ttf|eot|otf|svg|png)$/,
        loader: 'file-loader'
    },
    {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules)/,
        loader: 'file-loader',
    },
    {
        test: /\.(woff|woff2)$/,
        exclude: /(node_modules)/,
        loader: 'file-loader?prefix=font/&limit=5000',
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules)/,
        loader: 'file-loader?limit=10000&mimetype=application/octet-stream',
    },
    {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules)/,
        loader: 'file-loader?limit=10000&mimetype=image/svg+xml',
    },
    {
        test: /\.jpg/,
        exclude: /(node_modules)/,
        loader: 'file-loader?limit=10000&mimetype=image/jpg',
    }
];
