const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, arg) {
    const config = await createExpoWebpackConfigAsync({
        ...eval,
        mode: 'development',
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
        ],
        // https://forums.expo.io/t/expo-start-web-failed-to-compile-after-import-native-base/40826/8
        // https://github.com/akveo/react-native-ui-kitten/issues/996#issuecomment-616115469
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@codler/react-native-keyboard-aware-scroll-view'],
        },
    })
    return config
};
