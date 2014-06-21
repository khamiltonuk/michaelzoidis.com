'use strict';

var router = require('express').Router(),
    page = require('../controllers/page'),
    project = require('../controllers/project');

/**
 * render index page with no path
 */
router.route('/')
  .get(page.index);

/**
 * render project page
 */
router.route('/work/:project')
  .get(project.render);

/**
 * render appropriate template for path
 */
router.route('/:page')
  .get(page.render);

module.exports.router = router;