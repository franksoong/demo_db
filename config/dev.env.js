/*
 * @Author: soong
 * @Date: 2017-11-27 16:16:45
 * @Last Modified by:   soong
 * @Last Modified time: 2017-11-27 16:16:45
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
})
