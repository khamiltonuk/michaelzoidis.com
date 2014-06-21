'use strict';

/**
 * render the 'home' template, used for the '/' route.
 */
module.exports.index = function (req, res) {
  res.render('pages/home', { title: 'Home'});
};

/**
 * render a template based on the request path
 * 
 * e.g. '/about' will try to load ('pages/about.html')
 *       it it's not found, show a 404 page
 */
module.exports.render = function (req, res) {
  res.render('pages/' + req.params.page, function (error, html) {
    if (error) {
      res.status(404);
      res.render('pages/404', { title: 'Page not found' });
    } else {
      res.send(html);
    }
  });
};