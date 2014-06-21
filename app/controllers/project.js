'use strict';

var fs = require('fs'),
    path = __dirname + '/../../data/projects/';

/**
 * render a project page
 */
module.exports.render = function (req, res) {
  var file = req.params.project + '.json';

  fs.readFile(path + file, function (error, data) {
    if (error) {
      console.log(error);
      res.status(404);
      res.render('pages/404', { name: 'Page not found' });
    } else {
      data = JSON.parse(data);
      res.render('pages/project', 
        { 
          name: data.name,
          project: data
        }
      );
    }
  });
};