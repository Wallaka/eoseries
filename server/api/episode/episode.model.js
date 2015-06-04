"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EpisodeSchema = new Schema({
  show_id: {type: String, required: true},
  episode_id: {type: String, required: true},
  season_number: {type: Number, required: true},
  episode_number: {type: Number, required: true},
  episode_name: {type: String, required: true},
  episode_poster: {type: String, default: "none"},
  duration_time: {type: Number, required: true},
  release_date: {type: Date, default: Date.now},
  synopsis: {type: String, default: "none"},
  notes: {
    one_stars: Number,
    two_stars: Number,
    three_stars: Number,
    four_stars: Number,
    five_stars: Number
  }
});

module.exports = mongoose.model("Episode", EpisodeSchema);
