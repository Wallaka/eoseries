"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  show_id: String,
  episode_id: String,
  author: String,
  date: {
    type: Date, default: Date.now
  },
  content: String
});

/**
 * Validations
 */

// Validate empty email
CommentSchema
  .path('show_id')
  .validate(function(name)
  {
    return name.length;
  }, 'ShowId cannot be blank');

module.exports = mongoose.model("Comment", CommentSchema);
