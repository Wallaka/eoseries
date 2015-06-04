"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ShowSchema = new Schema({
  show_id: {type: String},
  name: {type: String, required:true},
  synopsis: {type: String},
  poster: {type: String, default: "none"},
  status: {type: String},
  network: {type: String},
  genre: {type: [String]},
  notes: {
    one_stars: Number,
    two_stars: Number,
    three_stars: Number,
    four_stars: Number,
    five_stars: Number
  }
});

/**
 * Validations
 */

// Validate empty email
ShowSchema
  .path('name')
  .validate(function(name)
  {
    return name.length;
  }, 'ShowName cannot be blank');

module.exports = mongoose.model("Show", ShowSchema);
