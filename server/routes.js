/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var bodyParser = require('body-parser');
var express = require('express');

module.exports = function(app)
{
  app.use(bodyParser.urlencoded({ extended :false }));
  app.use(bodyParser.json());

  // Insert routes below
  app.use('/api/users', require('./api/user'));
  app.use('/api/shows', require('./api/show'));
  app.use('/api/comments', require('./api/comment'));
  app.use('/api/episodes', require('./api/episode'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
