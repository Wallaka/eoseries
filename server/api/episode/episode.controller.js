/* Using Rails-like standard naming convention for endpoints.
 * GET     /episodes              ->  index
 * POST    /episodes              ->  create
 * GET     /episodes/:id          ->  show
 * PUT     /episodes/:id          ->  update
 * DELETE  /episodes/:id          ->  destroy
 */

"use strict";

var _ = require("lodash");
var Episode = require("./episode.model");
var Comment = require("../comment/comment.model");

// Get list of episodes from the DB.
exports.index = function(req, res) {
  Episode.find({"show_id": req.param("show_id")}, function(err, found) {
    if (err)
      return handleError(res, err);
    return res.json(201, found);
  });
};

// Creates a new episode in the DB.
exports.create = function(req, res) {
  var episode_id = "s";

  if (req.param("season_number") < 10)
    episode_id += 0;
  episode_id += req.param("season_number");
  episode_id += "e";
  if (req.param("episode_number") < 10)
    episode_id += 0;
  episode_id += req.param("episode_number");
  req.body.episode_id = episode_id;

  Episode.find({episode_id: req.param("episode_id"), show_id: req.param("show_id")}, function(err, found) {
    if (!found.length) {
      Episode.create(req.body, function(err, found) {
        if (err)
          return handleError(res, err);
        return res.json(201, found);
      });
    }
  });
};

// Get one episode from the DB.
exports.show = function(req, res) {
  Episode.find({show_id: req.param("show_id"), episode_id: req.param("episode_id")}, function(err, found) {
    if (err)
      return handleError(res, err);
    return res.json(201, found)
  })
};

// Delete one episode from the DB.
exports.destroy = function(req, res) {
  Episode.findOneAndRemove({show_id: req.param("show_id"), episode_id: req.param("episode_id")}, function(err, found) {
    if (err)
      return handleError(res, err);
    Comment.find({show_id: req.param("show_id"), episode_id: req.param("episode_id")}).remove().exec();
    return res.json(201, found);
  })
};

// Update one episode from the DB.
exports.update = function(req, res) {
  var episode_id = "s";

  if (req.param("season_number") < 10)
    episode_id += 0;
  episode_id += req.param("season_number");
  episode_id += "e";
  if (req.param("episode_number") < 10)
    episode_id += 0;
  episode_id += req.param("episode_number");
  req.body.episode_id = episode_id;

  Episode.findOneAndUpdate({show_id: req.param("show_id"), episode_id: req.param("episode_id")}, req.body, function(err, found) {
    if (err)
      return handleError(res, err);
    return res.json(201, found);
  })
};

// Return well formatted errors.
function handleError(res, err) {
  return res.send(500, err);
}
