'use strict';

var express = require('express'),
    swig = require('swig'),
    morgan = require('morgan'),
    favicon = require('serve-favicon'),
    app = express();

/**
 * set up swig for templating:
 * app/views is used as the base template path
 * caching disabled for now, in production we should enable it
 * 
 * http://paularmstrong.github.io/swig/
 */
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/templates');
app.set('view cache', false);
swig.setDefaults({ cache: false });


/**
 * declare static folder
 * this forwards requests to static files (css, js, images) 
 * to the /assets directory.
 *
 * with this, you never need to include /assets/ in your url 
 * when referencing static files.
 */
app.use(express.static(__dirname + '/assets'));

/**
 * serve favicon
 */
app.use(favicon(__dirname + '/assets/favicon.ico'));

/**
 * set up routes
 */
app.use('/', require(__dirname + '/app/routes/main').router);

/**
 * enable request logging
 */
app.use(morgan('dev'));

/**
 * start server
 */
app.listen(3000);
console.log('server listening on port 3000');