'use strict';

/**
 * render the 'home' template, used for the '/' route.
 */
module.exports.index = function (req, res) {
  res.render('pages/home', { name: 'Home'});
};

/**
 * render a template based on the request path
 * 
 * e.g. '/about' will try to load ('pages/about.html')
 *       it it's not found, show a 404 page
 */
module.exports.render = function (req, res) {
  var page = req.params.page;

  res.render('pages/' + page, { name: page }, function (error, html) {
    if (error) {
      res.status(404);
      res.render('pages/404', { name: 'Page not found' });
    } else {
      res.send(html, {
        myVar: 'My Data'
      });
    }
  });
};