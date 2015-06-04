/* Using Rails-like standard naming convention for endpoints.
* GET     /shows              ->  index
* POST    /shows              ->  create
* GET     /shows/:id          ->  show
* PUT     /shows/:id          ->  update
* DELETE  /shows/:id          ->  destroy
*/

"use strict";

var _ = require("lodash");
var Show = require("./show.model");
var Episode = require("../episode/episode.model");
var Comment = require("../comment/comment.model");

// Get list of shows from the DB.
exports.index = function(req, res) {
  Show.find({}, "name show_id", function(err, found) {
    if (err)
      return handleError(res, err);
    return res.json(201, found);
  });
};

// Creates a new show in the DB.
exports.create = function(req, res) {
  req.body.show_id = req.param("name").toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  Show.find({show_id: req.param("show_id")}, function(err, found) {
    if (!found.length) {
      Show.create(req.body, function(err, found) {
        if (err)
          return handleError(res, err);
        return res.json(201, found);
      });
    }
  });
};

// Get one show from the DB.
exports.show = function(req, res) {
  Show.find({show_id: req.param("show_id")}, function(err, found) {
    if (err)
      return handleError(res, err);
    return res.json(201, found);
  });
};

// Delete one show from the DB.
exports.destroy = function(req, res) {
  Show.findOneAndRemove({show_id: req.param("show_id")}, function(err, found) {
    if (err)
      return handleError(res, err);
    Episode.find({show_id: req.param("show_id")}).remove().exec();
    Comment.find({show_id: req.param("show_id")}).remove().exec();
    return res.json(201, found);
  });
};

// Update one show from the DB.
exports.update = function(req, res)
{
  req.body.show_id = req.param("name").toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  Show.findOneAndUpdate({show_id: req.param("show_id")}, req.body, function(err, found)
  {
    if (err)
      return handleError(res, err);
    return res.json(201, found);
  });
};

/**
 * Update the ratings of a show
 * @param res
 * @param req
 * @returns {*}
 */
exports.ratings = function(req, res)
{
  var whichRating = ['', 'one_stars', 'two_stars', 'three_stars', 'four_stars', 'five_stars'];
  var variable = 'notes.' + whichRating[req.param("stars")];
  var action = {};
  action[variable] = 1;

  Show.findOneAndUpdate(
    {show_id: req.param("show_id")},
    {$inc: action},
    function(err, found)
  {
    if (err)
      return handleError(res, err);
    return res.json(201, found);
  });
};

// Return well formatted errors.
function handleError(res, err) {
  return res.send(500, err);
}
