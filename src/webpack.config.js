const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./app/app.js',
    output: {
        path:path.resolve('dist'),
        filename: 'bundle.js'
    },


    plugins:[
        new HtmlWebpackPlugin({
            template: './app/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]

};