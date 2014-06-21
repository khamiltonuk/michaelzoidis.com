'use strict';

var router = require('express').Router(),
    page = require('../controllers/page');

/**
 * render index page with no path
 */
router.route('/')
  .get(page.index);

/**
 * render appropriate template for path
 */
router.route('/:page')
  .get(page.render);

module.exports.router = router;