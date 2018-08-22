var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './client/index'
    ],
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                include: [path.resolve(__dirname, 'client')],
                exclude: [path.resolve(__dirname, '/node_modules/')],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]

            }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        path: path.join(__dirname, '.build/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [

    ],
    mode: 'production'
};
