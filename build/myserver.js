/*
 * @Author: soong
 * @Date: 2017-11-27 16:15:50
 * @Last Modified by:   soong
 * @Last Modified time: 2017-11-27 16:15:50
 */
const path = require('path');
const express = require('express');
const config = require('../config');
const opn = require('opn');

const app = new express();
const port = process.env.PORT || config.build.port;


// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve pure static assets
//const staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
// use virtual dir
app.use(express.static(config.build.assetsRoot))

const uri = 'http://localhost:' + port

app.listen(port, error => {
    /* eslint-disable no-console */
    if (error) {
        console.error(error);
    } else {
        console.info('  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);

        opn(uri);
    }
    /* eslint-enable no-console */
});
