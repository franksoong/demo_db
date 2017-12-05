/*
 * @Author: soong
 * @Date: 2017-11-27 16:17:16
 * @Last Modified by:   soong
 * @Last Modified time: 2017-11-27 16:17:16
 */
'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
    NODE_ENV: '"testing"'
})
