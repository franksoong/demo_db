/*
 * @Author: soong
 * @Date: 2017-11-27 16:15:35
 * @Last Modified by:   soong
 * @Last Modified time: 2017-11-27 16:15:35
 */
/* eslint-disable */
'use strict'
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
    if (event.action === 'reload') {
        window.location.reload()
    }
})
