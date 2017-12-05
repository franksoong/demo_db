/*
 * @Author: soong
 * @Date: 2017-11-27 16:16:21
 * @Last Modified by:   soong
 * @Last Modified time: 2017-11-27 16:16:21
 */
'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    console.log("entry chunk name: " + name);
    console.log("entry chunk before: " + baseWebpackConfig.entry[name]);

    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])

    console.log("entry chunk after: " + baseWebpackConfig.entry[name]);
})

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap
        })
    },
    // cheap-module-eval-source-map is faster for development, but mapping is very loose
    // devtool: '#cheap-module-eval-source-map',
    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            title: process.env.npm_package_name,
            filename: 'index.html',
            favicon: path.join('src', 'assets', 'favicon.png'),
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
})
