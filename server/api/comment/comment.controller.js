/* Using Rails-like standard naming convention for endpoints.
 * GET     /shows              ->  index
 * POST    /shows              ->  create
 * PUT     /shows/:id          ->  update
 * DELETE  /shows/:id          ->  destroy
 */

"use strict";

var Comment = require("./comment.model");

// Creates a new comment in the DB.
exports.create = function(req, res) {
  Comment.create(req.body, function(err, found) {
    if (err)
      return handleError(res, err);
    return res.json(201, found);
  })
};

// Update one comment from the DB.
exports.update = function(req, res) {
  Comment.findByIdAndUpdate(req.param("comment_id"), req.body, function (err, found) {
    if (err)
      return handleError(res, err);
    return res.json(201, found);
  });
};

// Get list of comments from the DB of the show.
exports.index = function(req, res) {
  Comment.find({"show_id" : req.param("show_id"), "episode_id" : ""}, function(err, found) {
    if (err)
      return handleError(res, err);
    return res.json(201, found);
  });
};

// Get the comment from one episode comments from the DB.
exports.show = function(req, res) {
  Comment.find({"show_id" : req.param("show_id"), "episode_id" : req.param("episode_id")}, function(err, found) {
    if (err)
      return handleError(res, err);
    return res.json(201, found);
  });
};

// Delete one comment from the DB.
exports.destroy = function(req, res) {
  Comment.findByIdAndRemove(req.param("comment_id"), function (err, found) {
    if (err)
      return handleError(res, err);
    return res.json(201, found);
  })
};

// Return well formatted errors.
function handleError(res, err) {
  return res.send(500, err);
}
