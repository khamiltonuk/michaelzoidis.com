'use strict';

var fs = require('fs'),
    marked = require('marked'),
    path = __dirname + '/../../data/projects/',
    extension = '.md';

/**
 * render a project page: attempt to load a markdwon file matching the 
 * project path from the url, render it to html using the marked library
 * and pass it to the template.
 *
 * @see https://github.com/chjj/marked
 */
module.exports.render = function (req, res) {
  var file = path + req.params.project + extension;

  fs.readFile(file, { encoding: 'utf8' }, function (error, data) {
    if (error) {
      res.status(404);
      res.render('pages/404', { name: 'Page not found' });
    } else {
      res.render('pages/project', { html: marked(data) });
    }
  });
};