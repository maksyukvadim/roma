const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './dist/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [ './src/index.js' ],
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/,   loaders: ['react-hot-loader/webpack', 'babel-loader'], exclude: /node_modules/ },
            { test: /\.jsx$/,   loaders: ['react-hot-loader/webpack', 'babel-loader'], exclude: /node_modules/ },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader'] }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};