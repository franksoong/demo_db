/*
 * @Author: soong
 * @Date: 2017-11-27 16:16:02
 * @Last Modified by: soong
 * @Last Modified time: 2017-11-28 16:53:05
 */
/*
 * @Author: soong
 * @Date: 2017-11-27 16:14:53
 * @Last Modified by:   soong
 * @Last Modified time: 2017-11-27 16:14:53
 */
'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    }),
    // https://bootstrap-vue.js.org/docs/reference/images
    transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
    }
}
