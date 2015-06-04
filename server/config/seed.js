/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

"use strict";

var User = require("../api/user/user.model");
var Show = require("../api/show/show.model");
var Episode = require("../api/episode/episode.model");
var Comment = require("../api/comment/comment.model");

User.find({}).remove(function() {
  User.create({
    provider: "local",
    name: "Test User",
    email: "test@test.com",
    password: "test"
  }, {
    provider: "local",
    role: "admin",
    name: "Admin",
    email: "admin@admin.com",
    password: "admin"
  }, function() {
      console.log("finished populating users");
    }
  );
});

Comment.find({}).remove(function() {
  Comment.create({
    show_id: "thewalkingdead",
    episode_id:"",
    author: "God",
    content: "Hello I'm God at The Walking Dead."
  }, {
    show_id: "heroes",
    episode_id: "",
    author: "God",
    content: "Hello I'm God at Heroes."
  }, {
    show_id: "thewalkingdead",
    episode_id: "s01e02",
    author: "God",
    content: "Hello I'm God."
  }, {
    show_id: "thewalkingdead",
    episode_id: "s01e01",
    author: "Sandra",
    content: "Oh my god it was annoying as hell."
  },{
    show_id:"thewalkingdead",
    episode_id: "s01e01",
    author: "Maura",
    content: "I don't know how to come"
  }, function() {
    console.log("finished populating comments");
  })
});

Episode.find({}).remove(function() {
  Episode.create({
    show_id: "24",
    episode_id: "s01e01",
    season_number: 1,
    episode_number: 1,
    episode_name: "S01E01",
    duration_time: 60,
    synopsis: "S01E01",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e02",
    season_number: 1,
    episode_number: 2,
    episode_name: "S01E02",
    duration_time: 60,
    synopsis: "S01E02",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e03",
    season_number: 1,
    episode_number: 3,
    episode_name: "S01E03",
    duration_time: 60,
    synopsis: "S01E03",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e04",
    season_number: 1,
    episode_number: 4,
    episode_name: "S01E04",
    duration_time: 60,
    synopsis: "S01E04",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e05",
    season_number: 1,
    episode_number: 5,
    episode_name: "S01E05",
    duration_time: 60,
    synopsis: "S01E05",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e06",
    season_number: 1,
    episode_number: 6,
    episode_name: "S01E06",
    duration_time: 60,
    synopsis: "S01E06",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e07",
    season_number: 1,
    episode_number: 7,
    episode_name: "S01E07",
    duration_time: 60,
    synopsis: "S01E07",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e08",
    season_number: 1,
    episode_number: 8,
    episode_name: "S01E08",
    duration_time: 60,
    synopsis: "S01E08",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e09",
    season_number: 1,
    episode_number: 9,
    episode_name: "S01E09",
    duration_time: 60,
    synopsis: "S01E09",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e10",
    season_number: 1,
    episode_number: 10,
    episode_name: "S01E10",
    duration_time: 60,
    synopsis: "S01E10",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e11",
    season_number: 1,
    episode_number: 11,
    episode_name: "S01E11",
    duration_time: 60,
    synopsis: "S01E11",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e12",
    season_number: 1,
    episode_number: 12,
    episode_name: "S01E12",
    duration_time: 60,
    synopsis: "S01E12",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e13",
    season_number: 1,
    episode_number: 13,
    episode_name: "S01E13",
    duration_time: 60,
    synopsis: "S01E13",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e14",
    season_number: 1,
    episode_number: 14,
    episode_name: "S01E14",
    duration_time: 60,
    synopsis: "S01E14",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e15",
    season_number: 1,
    episode_number: 15,
    episode_name: "S01E15",
    duration_time: 60,
    synopsis: "S01E15",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e16",
    season_number: 1,
    episode_number: 16,
    episode_name: "S01E16",
    duration_time: 60,
    synopsis: "S01E16",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e17",
    season_number: 1,
    episode_number: 17,
    episode_name: "S01E17",
    duration_time: 60,
    synopsis: "S01E17",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e18",
    season_number: 1,
    episode_number: 18,
    episode_name: "S01E18",
    duration_time: 60,
    synopsis: "S01E18",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e19",
    season_number: 1,
    episode_number: 19,
    episode_name: "S01E19",
    duration_time: 60,
    synopsis: "S01E19",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e20",
    season_number: 1,
    episode_number: 20,
    episode_name: "S01E20",
    duration_time: 60,
    synopsis: "S01E20",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e21",
    season_number: 1,
    episode_number: 21,
    episode_name: "S01E21",
    duration_time: 60,
    synopsis: "S01E21",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e22",
    season_number: 1,
    episode_number: 22,
    episode_name: "S01E22",
    duration_time: 60,
    synopsis: "S01E22",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e23",
    season_number: 1,
    episode_number: 23,
    episode_name: "S01E23",
    duration_time: 60,
    synopsis: "S01E23",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s01e24",
    season_number: 1,
    episode_number: 24,
    episode_name: "S01E24",
    duration_time: 60,
    synopsis: "S01E24",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e01",
    season_number: 2,
    episode_number: 1,
    episode_name: "S02E01",
    duration_time: 60,
    synopsis: "S02E01",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e02",
    season_number: 2,
    episode_number: 2,
    episode_name: "S02E02",
    duration_time: 60,
    synopsis: "S02E02",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e03",
    season_number: 2,
    episode_number: 3,
    episode_name: "S02E03",
    duration_time: 60,
    synopsis: "S02E03",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e04",
    season_number: 2,
    episode_number: 4,
    episode_name: "S02E04",
    duration_time: 60,
    synopsis: "S02E04",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e05",
    season_number: 2,
    episode_number: 5,
    episode_name: "S02E05",
    duration_time: 60,
    synopsis: "S02E05",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e06",
    season_number: 2,
    episode_number: 6,
    episode_name: "S02E06",
    duration_time: 60,
    synopsis: "S02E06",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e07",
    season_number: 2,
    episode_number: 7,
    episode_name: "S02E07",
    duration_time: 60,
    synopsis: "S02E07",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e08",
    season_number: 2,
    episode_number: 8,
    episode_name: "S02E08",
    duration_time: 60,
    synopsis: "S02E08",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e09",
    season_number: 2,
    episode_number: 9,
    episode_name: "S02E09",
    duration_time: 60,
    synopsis: "S02E09",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e10",
    season_number: 2,
    episode_number: 10,
    episode_name: "S02E10",
    duration_time: 60,
    synopsis: "S02E10",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e11",
    season_number: 2,
    episode_number: 11,
    episode_name: "S02E11",
    duration_time: 60,
    synopsis: "S02E11",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e12",
    season_number: 2,
    episode_number: 12,
    episode_name: "S02E12",
    duration_time: 60,
    synopsis: "S02E12",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e13",
    season_number: 2,
    episode_number: 13,
    episode_name: "S02E13",
    duration_time: 60,
    synopsis: "S02E13",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e14",
    season_number: 2,
    episode_number: 14,
    episode_name: "S02E14",
    duration_time: 60,
    synopsis: "S02E14",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e15",
    season_number: 2,
    episode_number: 15,
    episode_name: "S02E15",
    duration_time: 60,
    synopsis: "S02E15",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e16",
    season_number: 2,
    episode_number: 16,
    episode_name: "S02E16",
    duration_time: 60,
    synopsis: "S02E16",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e17",
    season_number: 2,
    episode_number: 17,
    episode_name: "S02E17",
    duration_time: 60,
    synopsis: "S02E17",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e18",
    season_number: 2,
    episode_number: 18,
    episode_name: "S02E18",
    duration_time: 60,
    synopsis: "S02E18",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e19",
    season_number: 2,
    episode_number: 19,
    episode_name: "S02E19",
    duration_time: 60,
    synopsis: "S02E19",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e20",
    season_number: 2,
    episode_number: 20,
    episode_name: "S02E20",
    duration_time: 60,
    synopsis: "S02E20",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e21",
    season_number: 2,
    episode_number: 21,
    episode_name: "S02E21",
    duration_time: 60,
    synopsis: "S02E21",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e22",
    season_number: 2,
    episode_number: 22,
    episode_name: "S02E22",
    duration_time: 60,
    synopsis: "S02E22",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e23",
    season_number: 2,
    episode_number: 23,
    episode_name: "S02E23",
    duration_time: 60,
    synopsis: "S02E23",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s02e24",
    season_number: 2,
    episode_number: 24,
    episode_name: "S02E24",
    duration_time: 60,
    synopsis: "S02E24",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e01",
    season_number: 3,
    episode_number: 1,
    episode_name: "S03E01",
    duration_time: 60,
    synopsis: "S03E01",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e02",
    season_number: 3,
    episode_number: 2,
    episode_name: "S03E02",
    duration_time: 60,
    synopsis: "S03E02",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e03",
    season_number: 3,
    episode_number: 3,
    episode_name: "S03E03",
    duration_time: 60,
    synopsis: "S03E03",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e04",
    season_number: 3,
    episode_number: 4,
    episode_name: "S03E04",
    duration_time: 60,
    synopsis: "S03E04",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e05",
    season_number: 3,
    episode_number: 5,
    episode_name: "S03E05",
    duration_time: 60,
    synopsis: "S03E05",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e06",
    season_number: 3,
    episode_number: 6,
    episode_name: "S03E06",
    duration_time: 60,
    synopsis: "S03E06",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e07",
    season_number: 3,
    episode_number: 7,
    episode_name: "S03E07",
    duration_time: 60,
    synopsis: "S03E07",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e08",
    season_number: 3,
    episode_number: 8,
    episode_name: "S03E08",
    duration_time: 60,
    synopsis: "S03E08",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e09",
    season_number: 3,
    episode_number: 9,
    episode_name: "S03E09",
    duration_time: 60,
    synopsis: "S03E09",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e10",
    season_number: 3,
    episode_number: 10,
    episode_name: "S03E10",
    duration_time: 60,
    synopsis: "S03E10",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e11",
    season_number: 3,
    episode_number: 11,
    episode_name: "S03E11",
    duration_time: 60,
    synopsis: "S03E11",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e12",
    season_number: 3,
    episode_number: 12,
    episode_name: "S03E12",
    duration_time: 60,
    synopsis: "S03E12",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e13",
    season_number: 3,
    episode_number: 13,
    episode_name: "S03E13",
    duration_time: 60,
    synopsis: "S03E13",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e14",
    season_number: 3,
    episode_number: 14,
    episode_name: "S03E14",
    duration_time: 60,
    synopsis: "S03E14",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e15",
    season_number: 3,
    episode_number: 15,
    episode_name: "S03E15",
    duration_time: 60,
    synopsis: "S03E15",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e16",
    season_number: 3,
    episode_number: 16,
    episode_name: "S03E16",
    duration_time: 60,
    synopsis: "S03E16",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e17",
    season_number: 3,
    episode_number: 17,
    episode_name: "S03E17",
    duration_time: 60,
    synopsis: "S03E17",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e18",
    season_number: 3,
    episode_number: 18,
    episode_name: "S03E18",
    duration_time: 60,
    synopsis: "S03E18",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e19",
    season_number: 3,
    episode_number: 19,
    episode_name: "S03E19",
    duration_time: 60,
    synopsis: "S03E19",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e20",
    season_number: 3,
    episode_number: 20,
    episode_name: "S03E20",
    duration_time: 60,
    synopsis: "S03E20",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e21",
    season_number: 3,
    episode_number: 21,
    episode_name: "S03E21",
    duration_time: 60,
    synopsis: "S03E21",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e22",
    season_number: 3,
    episode_number: 22,
    episode_name: "S03E22",
    duration_time: 60,
    synopsis: "S03E22",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e23",
    season_number: 3,
    episode_number: 23,
    episode_name: "S03E23",
    duration_time: 60,
    synopsis: "S03E23",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s03e24",
    season_number: 3,
    episode_number: 24,
    episode_name: "S03E24",
    duration_time: 60,
    synopsis: "S03E24",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e01",
    season_number: 4,
    episode_number: 1,
    episode_name: "S04E01",
    duration_time: 60,
    synopsis: "S04E01",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e02",
    season_number: 4,
    episode_number: 2,
    episode_name: "S04E02",
    duration_time: 60,
    synopsis: "S04E02",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e03",
    season_number: 4,
    episode_number: 3,
    episode_name: "S04E03",
    duration_time: 60,
    synopsis: "S04E03",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e04",
    season_number: 4,
    episode_number: 4,
    episode_name: "S04E04",
    duration_time: 60,
    synopsis: "S04E04",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e05",
    season_number: 4,
    episode_number: 5,
    episode_name: "S04E05",
    duration_time: 60,
    synopsis: "S04E05",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e06",
    season_number: 4,
    episode_number: 6,
    episode_name: "S04E06",
    duration_time: 60,
    synopsis: "S04E06",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e07",
    season_number: 4,
    episode_number: 7,
    episode_name: "S04E07",
    duration_time: 60,
    synopsis: "S04E07",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e08",
    season_number: 4,
    episode_number: 8,
    episode_name: "S04E08",
    duration_time: 60,
    synopsis: "S04E08",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e09",
    season_number: 4,
    episode_number: 9,
    episode_name: "S04E09",
    duration_time: 60,
    synopsis: "S04E09",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e10",
    season_number: 4,
    episode_number: 10,
    episode_name: "S04E10",
    duration_time: 60,
    synopsis: "S04E10",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e11",
    season_number: 4,
    episode_number: 11,
    episode_name: "S04E11",
    duration_time: 60,
    synopsis: "S04E11",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e12",
    season_number: 4,
    episode_number: 12,
    episode_name: "S04E12",
    duration_time: 60,
    synopsis: "S04E12",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e13",
    season_number: 4,
    episode_number: 13,
    episode_name: "S04E13",
    duration_time: 60,
    synopsis: "S04E13",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e14",
    season_number: 4,
    episode_number: 14,
    episode_name: "S04E014",
    duration_time: 60,
    synopsis: "S04E014",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e15",
    season_number: 4,
    episode_number: 15,
    episode_name: "S04E15",
    duration_time: 60,
    synopsis: "S04E15",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e16",
    season_number: 4,
    episode_number: 16,
    episode_name: "S04E16",
    duration_time: 60,
    synopsis: "S04E16",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e17",
    season_number: 4,
    episode_number: 17,
    episode_name: "S04E17",
    duration_time: 60,
    synopsis: "S04E17",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e18",
    season_number: 4,
    episode_number: 18,
    episode_name: "S04E18",
    duration_time: 60,
    synopsis: "S04E18",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e19",
    season_number: 4,
    episode_number: 19,
    episode_name: "S04E19",
    duration_time: 60,
    synopsis: "S04E19",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e20",
    season_number: 4,
    episode_number: 20,
    episode_name: "S04E20",
    duration_time: 60,
    synopsis: "S04E20",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e21",
    season_number: 4,
    episode_number: 21,
    episode_name: "S04E21",
    duration_time: 60,
    synopsis: "S04E21",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e22",
    season_number: 4,
    episode_number: 22,
    episode_name: "S04E22",
    duration_time: 60,
    synopsis: "S04E22",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e23",
    season_number: 4,
    episode_number: 23,
    episode_name: "S04E23",
    duration_time: 60,
    synopsis: "S04E23",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s04e24",
    season_number: 4,
    episode_number: 24,
    episode_name: "S04E24",
    duration_time: 60,
    synopsis: "S04E24",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e01",
    season_number: 5,
    episode_number: 1,
    episode_name: "S05E01",
    duration_time: 60,
    synopsis: "S05E01",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e02",
    season_number: 5,
    episode_number: 2,
    episode_name: "S05E02",
    duration_time: 60,
    synopsis: "S05E02",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e03",
    season_number: 5,
    episode_number: 3,
    episode_name: "S05E03",
    duration_time: 60,
    synopsis: "S05E03",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e04",
    season_number: 5,
    episode_number: 4,
    episode_name: "S05E04",
    duration_time: 60,
    synopsis: "S05E04",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e05",
    season_number: 5,
    episode_number: 5,
    episode_name: "S05E05",
    duration_time: 60,
    synopsis: "S05E05",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e06",
    season_number: 5,
    episode_number: 6,
    episode_name: "S05E06",
    duration_time: 60,
    synopsis: "S05E06",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e07",
    season_number: 5,
    episode_number: 7,
    episode_name: "S05E07",
    duration_time: 60,
    synopsis: "S05E07",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e08",
    season_number: 5,
    episode_number: 8,
    episode_name: "S05E08",
    duration_time: 60,
    synopsis: "S05E08",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e09",
    season_number: 5,
    episode_number: 9,
    episode_name: "S05E09",
    duration_time: 60,
    synopsis: "S05E09",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e10",
    season_number: 5,
    episode_number: 10,
    episode_name: "S05E10",
    duration_time: 60,
    synopsis: "S05E10",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e11",
    season_number: 5,
    episode_number: 11,
    episode_name: "S05E11",
    duration_time: 60,
    synopsis: "S05E11",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e12",
    season_number: 5,
    episode_number: 12,
    episode_name: "S05E12",
    duration_time: 60,
    synopsis: "S05E12",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e13",
    season_number: 5,
    episode_number: 13,
    episode_name: "S05E13",
    duration_time: 60,
    synopsis: "S05E13",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e14",
    season_number: 5,
    episode_number: 14,
    episode_name: "S05E14",
    duration_time: 60,
    synopsis: "S05E14",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e15",
    season_number: 5,
    episode_number: 15,
    episode_name: "S05E15",
    duration_time: 60,
    synopsis: "S05E15",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e16",
    season_number: 5,
    episode_number: 16,
    episode_name: "S05E16",
    duration_time: 60,
    synopsis: "S05E16",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e17",
    season_number: 5,
    episode_number: 17,
    episode_name: "S05E17",
    duration_time: 60,
    synopsis: "S05E17",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e18",
    season_number: 5,
    episode_number: 18,
    episode_name: "S05E18",
    duration_time: 60,
    synopsis: "S05E18",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e19",
    season_number: 5,
    episode_number: 19,
    episode_name: "S05E19",
    duration_time: 60,
    synopsis: "S05E19",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e20",
    season_number: 5,
    episode_number: 20,
    episode_name: "S05E20",
    duration_time: 60,
    synopsis: "S05E20",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e21",
    season_number: 5,
    episode_number: 21,
    episode_name: "S05E21",
    duration_time: 60,
    synopsis: "S05E21",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e22",
    season_number: 5,
    episode_number: 22,
    episode_name: "S05E22",
    duration_time: 60,
    synopsis: "S05E22",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e23",
    season_number: 5,
    episode_number: 23,
    episode_name: "S05E23",
    duration_time: 60,
    synopsis: "S05E23",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s05e24",
    season_number: 5,
    episode_number: 24,
    episode_name: "S05E24",
    duration_time: 60,
    synopsis: "S05E24",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e01",
    season_number: 6,
    episode_number: 1,
    episode_name: "S06E01",
    duration_time: 60,
    synopsis: "S06E01",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e02",
    season_number: 6,
    episode_number: 2,
    episode_name: "S06E02",
    duration_time: 60,
    synopsis: "S06E02",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e03",
    season_number: 6,
    episode_number: 3,
    episode_name: "S06E03",
    duration_time: 60,
    synopsis: "S06E03",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e04",
    season_number: 6,
    episode_number: 4,
    episode_name: "S06E04",
    duration_time: 60,
    synopsis: "S06E04",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e05",
    season_number: 6,
    episode_number: 5,
    episode_name: "S06E05",
    duration_time: 60,
    synopsis: "S06E05",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e06",
    season_number: 6,
    episode_number: 6,
    episode_name: "S06E06",
    duration_time: 60,
    synopsis: "S06E06",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e07",
    season_number: 6,
    episode_number: 7,
    episode_name: "S06E07",
    duration_time: 60,
    synopsis: "S06E07",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e08",
    season_number: 6,
    episode_number: 8,
    episode_name: "S06E08",
    duration_time: 60,
    synopsis: "S06E08",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e09",
    season_number: 6,
    episode_number: 9,
    episode_name: "S06E09",
    duration_time: 60,
    synopsis: "S06E09",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e10",
    season_number: 6,
    episode_number: 10,
    episode_name: "S06E10",
    duration_time: 60,
    synopsis: "S06E10",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e11",
    season_number: 6,
    episode_number: 11,
    episode_name: "S06E11",
    duration_time: 60,
    synopsis: "S06E11",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e12",
    season_number: 6,
    episode_number: 12,
    episode_name: "S06E12",
    duration_time: 60,
    synopsis: "S06E12",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e13",
    season_number: 6,
    episode_number: 13,
    episode_name: "S06E13",
    duration_time: 60,
    synopsis: "S06E13",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e14",
    season_number: 6,
    episode_number: 14,
    episode_name: "S06E14",
    duration_time: 60,
    synopsis: "S06E14",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e15",
    season_number: 6,
    episode_number: 15,
    episode_name: "S06E15",
    duration_time: 60,
    synopsis: "S06E15",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e16",
    season_number: 6,
    episode_number: 16,
    episode_name: "S06E16",
    duration_time: 60,
    synopsis: "S06E16",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e17",
    season_number: 6,
    episode_number: 17,
    episode_name: "S06E17",
    duration_time: 60,
    synopsis: "S06E17",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e18",
    season_number: 6,
    episode_number: 18,
    episode_name: "S06E18",
    duration_time: 60,
    synopsis: "S06E18",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e19",
    season_number: 6,
    episode_number: 19,
    episode_name: "S06E19",
    duration_time: 60,
    synopsis: "S06E19",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e20",
    season_number: 6,
    episode_number: 20,
    episode_name: "S06E20",
    duration_time: 60,
    synopsis: "S06E20",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e21",
    season_number: 6,
    episode_number: 21,
    episode_name: "S06E21",
    duration_time: 60,
    synopsis: "S06E21",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e22",
    season_number: 6,
    episode_number: 22,
    episode_name: "S06E22",
    duration_time: 60,
    synopsis: "S06E22",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e23",
    season_number: 6,
    episode_number: 23,
    episode_name: "S06E23",
    duration_time: 60,
    synopsis: "S06E23",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s06e24",
    season_number: 6,
    episode_number: 24,
    episode_name: "S06E24",
    duration_time: 60,
    synopsis: "S06E24",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e01",
    season_number: 7,
    episode_number: 1,
    episode_name: "S07E01",
    duration_time: 60,
    synopsis: "S07E01",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e02",
    season_number: 7,
    episode_number: 2,
    episode_name: "S07E02",
    duration_time: 60,
    synopsis: "S07E02",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e03",
    season_number: 7,
    episode_number: 3,
    episode_name: "S07E03",
    duration_time: 60,
    synopsis: "S07E03",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e04",
    season_number: 7,
    episode_number: 4,
    episode_name: "S07E04",
    duration_time: 60,
    synopsis: "S07E04",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e05",
    season_number: 7,
    episode_number: 5,
    episode_name: "S07E05",
    duration_time: 60,
    synopsis: "S07E05",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e06",
    season_number: 7,
    episode_number: 6,
    episode_name: "S07E06",
    duration_time: 60,
    synopsis: "S07E06",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e07",
    season_number: 7,
    episode_number: 7,
    episode_name: "S07E07",
    duration_time: 60,
    synopsis: "S07E07",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e08",
    season_number: 7,
    episode_number: 8,
    episode_name: "S07E08",
    duration_time: 60,
    synopsis: "S07E08",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e09",
    season_number: 7,
    episode_number: 9,
    episode_name: "S07E09",
    duration_time: 60,
    synopsis: "S07E09",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e10",
    season_number: 7,
    episode_number: 10,
    episode_name: "S07E10",
    duration_time: 60,
    synopsis: "S07E10",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e11",
    season_number: 7,
    episode_number: 11,
    episode_name: "S07E11",
    duration_time: 60,
    synopsis: "S07E11",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e12",
    season_number: 7,
    episode_number: 12,
    episode_name: "S07E12",
    duration_time: 60,
    synopsis: "S07E12",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e13",
    season_number: 7,
    episode_number: 13,
    episode_name: "S07E13",
    duration_time: 60,
    synopsis: "S07E13",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e14",
    season_number: 7,
    episode_number: 14,
    episode_name: "S07E14",
    duration_time: 60,
    synopsis: "S07E14",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e15",
    season_number: 7,
    episode_number: 15,
    episode_name: "S07E15",
    duration_time: 60,
    synopsis: "S07E15",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e16",
    season_number: 7,
    episode_number: 16,
    episode_name: "S07E16",
    duration_time: 60,
    synopsis: "S07E16",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e17",
    season_number: 7,
    episode_number: 17,
    episode_name: "S07E17",
    duration_time: 60,
    synopsis: "S07E17",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e18",
    season_number: 7,
    episode_number: 18,
    episode_name: "S07E18",
    duration_time: 60,
    synopsis: "S07E18",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e19",
    season_number: 7,
    episode_number: 19,
    episode_name: "S07E19",
    duration_time: 60,
    synopsis: "S07E19",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e20",
    season_number: 7,
    episode_number: 20,
    episode_name: "S07E20",
    duration_time: 60,
    synopsis: "S07E20",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e21",
    season_number: 7,
    episode_number: 21,
    episode_name: "S07E21",
    duration_time: 60,
    synopsis: "S07E21",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e22",
    season_number: 7,
    episode_number: 22,
    episode_name: "S07E22",
    duration_time: 60,
    synopsis: "S07E22",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e23",
    season_number: 7,
    episode_number: 23,
    episode_name: "S07E23",
    duration_time: 60,
    synopsis: "S07E23",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s07e24",
    season_number: 7,
    episode_number: 24,
    episode_name: "S07E24",
    duration_time: 60,
    synopsis: "S07E24",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e01",
    season_number: 8,
    episode_number: 1,
    episode_name: "S08E01",
    duration_time: 60,
    synopsis: "S08E01",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e02",
    season_number: 8,
    episode_number: 2,
    episode_name: "S08E02",
    duration_time: 60,
    synopsis: "S08E02",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e03",
    season_number: 8,
    episode_number: 3,
    episode_name: "S08E03",
    duration_time: 60,
    synopsis: "S08E03",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e04",
    season_number: 8,
    episode_number: 4,
    episode_name: "S08E04",
    duration_time: 60,
    synopsis: "S08E04",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e05",
    season_number: 8,
    episode_number: 5,
    episode_name: "S08E05",
    duration_time: 60,
    synopsis: "S08E05",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e06",
    season_number: 8,
    episode_number: 6,
    episode_name: "S08E06",
    duration_time: 60,
    synopsis: "S08E06",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e07",
    season_number: 8,
    episode_number: 7,
    episode_name: "S08E07",
    duration_time: 60,
    synopsis: "S08E07",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e08",
    season_number: 8,
    episode_number: 8,
    episode_name: "S08E08",
    duration_time: 60,
    synopsis: "S08E08",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e09",
    season_number: 8,
    episode_number: 9,
    episode_name: "S08E09",
    duration_time: 60,
    synopsis: "S08E09",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e10",
    season_number: 8,
    episode_number: 10,
    episode_name: "S08E10",
    duration_time: 60,
    synopsis: "S08E10",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e11",
    season_number: 8,
    episode_number: 11,
    episode_name: "S08E11",
    duration_time: 60,
    synopsis: "S08E11",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e12",
    season_number: 8,
    episode_number: 12,
    episode_name: "S08E12",
    duration_time: 60,
    synopsis: "S08E12",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e13",
    season_number: 8,
    episode_number: 13,
    episode_name: "S08E13",
    duration_time: 60,
    synopsis: "S08E13",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e14",
    season_number: 8,
    episode_number: 14,
    episode_name: "S08E14",
    duration_time: 60,
    synopsis: "S08E14",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e15",
    season_number: 8,
    episode_number: 15,
    episode_name: "S08E15",
    duration_time: 60,
    synopsis: "S08E15",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e16",
    season_number: 8,
    episode_number: 16,
    episode_name: "S08E16",
    duration_time: 60,
    synopsis: "S08E16",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e17",
    season_number: 8,
    episode_number: 17,
    episode_name: "S08E17",
    duration_time: 60,
    synopsis: "S08E17",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e18",
    season_number: 8,
    episode_number: 18,
    episode_name: "S08E18",
    duration_time: 60,
    synopsis: "S08E18",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e19",
    season_number: 8,
    episode_number: 19,
    episode_name: "S08E19",
    duration_time: 60,
    synopsis: "S08E19",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e20",
    season_number: 8,
    episode_number: 20,
    episode_name: "S08E20",
    duration_time: 60,
    synopsis: "S08E20",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e21",
    season_number: 8,
    episode_number: 21,
    episode_name: "S08E21",
    duration_time: 60,
    synopsis: "S08E21",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e22",
    season_number: 8,
    episode_number: 22,
    episode_name: "S08E22",
    duration_time: 60,
    synopsis: "S08E22",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e23",
    season_number: 8,
    episode_number: 23,
    episode_name: "S08E23",
    duration_time: 60,
    synopsis: "S08E23",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s08e24",
    season_number: 8,
    episode_number: 24,
    episode_name: "S08E24",
    duration_time: 60,
    synopsis: "S08E24",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s09e01",
    season_number: 9,
    episode_number: 1,
    episode_name: "S09E01",
    duration_time: 60,
    synopsis: "S09E01",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s09e02",
    season_number: 9,
    episode_number: 2,
    episode_name: "S09E02",
    duration_time: 60,
    synopsis: "S09E02",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s09e03",
    season_number: 9,
    episode_number: 3,
    episode_name: "S09E03",
    duration_time: 60,
    synopsis: "S09E03",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s09e04",
    season_number: 9,
    episode_number: 4,
    episode_name: "S09E04",
    duration_time: 60,
    synopsis: "S09E04",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s09e05",
    season_number: 9,
    episode_number: 5,
    episode_name: "S09E05",
    duration_time: 60,
    synopsis: "S09E05",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s09e06",
    season_number: 9,
    episode_number: 6,
    episode_name: "S09E06",
    duration_time: 60,
    synopsis: "S09E06",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s09e07",
    season_number: 9,
    episode_number: 7,
    episode_name: "S09E07",
    duration_time: 60,
    synopsis: "S09E07",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s09e08",
    season_number: 9,
    episode_number: 8,
    episode_name: "S09E08",
    duration_time: 60,
    synopsis: "S09E08",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s09e09",
    season_number: 9,
    episode_number: 9,
    episode_name: "S09E09",
    duration_time: 60,
    synopsis: "S09E09",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s09e10",
    season_number: 9,
    episode_number: 10,
    episode_name: "S09E10",
    duration_time: 60,
    synopsis: "S09E10",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s09e11",
    season_number: 9,
    episode_number: 11,
    episode_name: "S09E11",
    duration_time: 60,
    synopsis: "S09E11",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "24",
    episode_id: "s09e12",
    season_number: 9,
    episode_number: 12,
    episode_name: "S09E12",
    duration_time: 60,
    synopsis: "S09E12",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "thewalkingdead",
    episode_id: "s01e01",
    season_number: 1,
    episode_number: 1,
    episode_name: "S01E01",
    duration_time: 60,
    synopsis: "S01E01",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "thewalkingdead",
    episode_id: "s01e02",
    season_number: 1,
    episode_number: 2,
    episode_name: "S01E02",
    duration_time: 60,
    synopsis: "S01E02",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "heroes",
    episode_id: "s01e01",
    season_number: 1,
    episode_number: 1,
    episode_name: "S01E01",
    duration_time: 60,
    synopsis: "S01E01",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e01",
    season_number: 1,
    episode_number: 1,
    episode_name: "Pilot",
    duration_time: 63,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjEwMTkyOTQ3NF5BMl5BanBnXkFtZTgwNDQ2NzM4MjE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Nine months after the S.T.A.R. Labs explosion, Barry awakens to find a lot has changed while he was in a coma. With his new friends and powers Barry must try to right the wrongs of his new mentor, the owner of S.T.A.R. Labs.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e02",
    season_number: 1,
    episode_number: 2,
    episode_name: "Fastest Man Alive",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTY3ODE1NDk0MF5BMl5BanBnXkFtZTgwMzk2NjM5MjE@._V1_SY317_CR130,0,214,317_AL_.jpg",
    synopsis: "Barry escorts Iris to a university gathering honoring scientist Simon Stagg. When six gunmen storm the event, Barry changes into The Flash and tries to stop them. While he does save a man's life, he passes out before he can capture the robbers, which frustrates him. As Dr. Wells, Caitlin and Cisco scramble to find out what's wrong with Barry, Joe comes down hard on Barry for taking the law into his own hands and risking his life. Barry realizes that it wasn't six gunmen but a metahuman named Danton Black, who can make multiples of himself. Meanwhile, Iris becomes even more intrigued by the 'red streak.'",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e03",
    season_number: 1,
    episode_number: 3,
    episode_name: "Things You Can't Outrun",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BNTYzNDQ4Njk1MV5BMl5BanBnXkFtZTgwODg3NjM5MjE@._V1_SY317_CR122,0,214,317_AL_.jpg",
    synopsis: "As Barry and the team at S.T.A.R. Labs work to capture Kyle Nimbus a.k.a. The Mist, a dangerous new meta-human with toxic gas powers, they revisit the painful night the particle accelerator exploded and killed Caitlin's fiancé, Ronnie Meanwhile, Joe decides to finally visit Henry in jail after all these years, but things take a dangerous turn when Kyle shows up looking to punish Joe for arresting him years ago. Meanwhile, Iris and Eddie continue to hide their relationship from Joe.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e04",
    season_number: 1,
    episode_number: 4,
    episode_name: "Going Rogue",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTYxNDU3NTMwNl5BMl5BanBnXkFtZTgwODk3ODcxMzE@._V1_SY317_CR104,0,214,317_AL_.jpg",
    synopsis: "The Flash stops a robbery but the culprits get away after shooting a guard, and The Flash chooses to save the man instead of following the criminals. Joe shows Barry a book of suspects and Barry identifies Leonard Snart as the leader of the group. Snart revises his plan to steal the Kahndaq Dynasty Diamond and gets a boost when he gets his hands on a stolen 'cold gun,' which could kill The Flash. Dr. Wells is furious when he finds out that Cisco built the cold gun without telling anyone and now it's missing. Meanwhile, Iris is getting the silent treatment from Joe because of her relationship with Eddie.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e05",
    season_number: 1,
    episode_number: 5,
    episode_name: "Plastique",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTUxMDQxNjk4MV5BMl5BanBnXkFtZTgwMjc0OTgzMzE@._V1_SY317_CR130,0,214,317_AL_.jpg",
    synopsis: "After a bomb goes off downtown, the army, led by General Eiling, rolls in and takes over the case, much to Joe's surprise. Suspicious, Joe tells Barry that he and his friends at S.T.A.R. Labs should look into the army's involvement. Wells informs the team that Eiling was experimenting on his men to turn them into super soldiers. Cisco confirms one of Eiling's soldiers, Bette Sans Souci, was at the bomb site. The Flash tracks her down and realizes that she's not setting off the bombs, she is a meta-human who can blow things up just by touching them. Meanwhile, when Joe learns Iris is writing about 'the streak,' he tells Barry to make her stop. Barry realizes Iris won't listen to him so he decides to have The Flash pay her a visit.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e06",
    season_number: 1,
    episode_number: 6,
    episode_name: "The Flash Is Born",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTY4NzUzNjI2NV5BMl5BanBnXkFtZTgwNzI1OTgzMzE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Many people are now aware of the 'Red Streak' saving lives, but Barry Allen is eager to make a name for himself. He wants everyone to know who the 'Red Streak' really is. Although, his actions cause unexpected consequences.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e07",
    season_number: 1,
    episode_number: 7,
    episode_name: "Power Outage",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjExOTY2OTY2Ml5BMl5BanBnXkFtZTgwMTI5MTg0MzE@._V1_SY317_CR120,0,214,317_AL_.jpg",
    synopsis: "The Flash goes up against Farooq aka Blackout, a metahuman who can harness electricity. During their battle, Farooq zaps The Flash and siphons all his electricity, leaving The Flash without his speed. Dr. Wells, Caitlin and Cisco work to reverse the effects on Barry, but their efforts are disrupted when Farooq comes banging on S.T.A.R. Labs doors in search of Wells, who he blames for his accident. Without Barry's powers to protect them, the group must figure out a way to save themselves from the metahuman. Meanwhile, Tockman manages a coup inside the Central City police department and takes several people hostage, including Joe and Iris. While Iris is sure The Flash will save them, Eddie has a trick up his sleeve.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e08",
    season_number: 1,
    episode_number: 8,
    episode_name: "Flash vs. Arrow",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjM1NTQ0MzEyNl5BMl5BanBnXkFtZTgwNTkxMjg0MzE@._V1_SY317_CR114,0,214,317_AL_.jpg",
    synopsis: "When a series of homicides cases involving a boomerang-like weapon brings the Arrow to Central City, the Flash must also take care of a new metahuman who manipulates emotions.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e09",
    season_number: 1,
    episode_number: 9,
    episode_name: "The Man in the Yellow Suit",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTc2MTE3OTA2Nl5BMl5BanBnXkFtZTgwNDM5NzA2MzE@._V1_SY317_CR114,0,214,317_AL_.jpg",
    synopsis: "Iris and Eddie take their relationship to the next level. Barry faces his rival finally. A ghost of Caitlyn's past returns. Cisco is asked for help. And there is a secret traitor among these people.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e10",
    season_number: 1,
    episode_number: 10,
    episode_name: "Revenge of the Rogues",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjI4MTI5MjAyOF5BMl5BanBnXkFtZTgwOTU1NzkwNDE@._V1_SX214_AL_.jpg",
    synopsis: "As Barry is struggling to train his speed in order to beat Reverse Flash, his old friend, Captain Cold, returns to Central City with the help of a new villain, Heat Wave",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e11",
    season_number: 1,
    episode_number: 11,
    episode_name: "The Sound and the Fury",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTg2MzY0NzExN15BMl5BanBnXkFtZTgwODkzODgxNDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "After his encounter with The Rogues, Barry must face off against a new villain, Pied Piper.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e12",
    season_number: 1,
    episode_number: 12,
    episode_name: "Crazy for You",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjM4NTEyNjQyNl5BMl5BanBnXkFtZTgwNTcxMzIzNDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Caitlin brings Barry out to a karaoke bar, hoping they both meet someone new; Cisco thinks about Hartley's dangerous proposition; Henry's snooping gets him into trouble.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e13",
    season_number: 1,
    episode_number: 13,
    episode_name: "The Nuclear Man",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjA4OTgyNzA1Ml5BMl5BanBnXkFtZTgwMTI3OTkzNDE@._V1_SX214_AL_.jpg",
    synopsis: "After Ronnie attacks a physicist, Barry and the team go after him. Joe enlists Cisco's help in the reinvestigation of Nora Allen's murder. Barry struggles with his relationship and his duties as The Flash.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e14",
    season_number: 1,
    episode_number: 14,
    episode_name: "Fallout",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BODYwNjY1NDc4Nl5BMl5BanBnXkFtZTgwNjMyMDg0NDE@._V1_SY317_CR130,0,214,317_AL_.jpg",
    synopsis: "After the nuclear explosion separates Ronnie and Dr. Stein, Barry and the team believe both men are safe. Barry gets some important information about time travel.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e15",
    season_number: 1,
    episode_number: 15,
    episode_name: "Out Of Time",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTU5Nzk5MzQxN15BMl5BanBnXkFtZTgwMTc0NDM4NDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Mark Mardon, having survived his apparent death during the black-matter explosion, returns seeking revenge on Joe for the death of his brother Clyde and has the same weather-manipulation powers as his deceased sibling.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "theflash",
    episode_id: "s01e16",
    season_number: 1,
    episode_number: 16,
    episode_name: "Rogue Time",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTk0NTYyMDg1OV5BMl5BanBnXkFtZTgwNzY3NDM4NDE@._V1_SY317_CR130,0,214,317_AL_.jpg",
    synopsis: "The Flash learns that Captain Cold and Heat Wave have returned to Central City. This time Snart has brought along his baby sister Lisa aka Golden Glider to help wreak havoc on the city.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e01",
    season_number: 1,
    episode_number: 1,
    episode_name: "Pilot",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTc3MTg0MDMyMV5BMl5BanBnXkFtZTcwMjc2MzQxOA@@._V1_SY317_CR104,0,214,317_AL_.jpg",
    synopsis: "Billionaire playboy, Oliver Queen, has been considered dead for five years. Now, he has returned. But something, during those five years, has changed him into a mysterious green hooded archer.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e02",
    season_number: 1,
    episode_number: 2,
    episode_name: "Honor Thy Father",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjA1NDQxMDc0NV5BMl5BanBnXkFtZTcwMTc2Mzc1OA@@._V1_SX214_AL_.jpg",
    synopsis: "Arrow moves further along his father's list while battling family issues with his mother, Moira, and especially with his sister. He also makes amends for past difficulties with Laurel.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e03",
    season_number: 1,
    episode_number: 3,
    episode_name: "Lone Gunmen",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTM1MDg1NTUyOF5BMl5BanBnXkFtZTcwMTg2Mzc1OA@@._V1_SX214_AL_.jpg",
    synopsis: "A mysterious sniper called Deadshot is taking out bidders at an auction for an industry company. The bidders include Oliver's stepfather, Walter Steele.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e04",
    season_number: 1,
    episode_number: 4,
    episode_name: "An Innocent Man",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BODgwOTE5NzY2N15BMl5BanBnXkFtZTcwOTQ0MjA2OA@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Peter Declan has been charged with murdering his wife, and only Oliver believes he's innocent. Arrow asks Laurel to look into Declan's case. Meanwhile, Walter investigates a warehouse that Moira mysteriously bought with the company's money.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e05",
    season_number: 1,
    episode_number: 5,
    episode_name: "Damaged",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTQzOTE3Njk4NV5BMl5BanBnXkFtZTcwOTU0MTU2OA@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver is accused of being the hooded archer and is put under house arrest. Also, he thinks back to his time on the island, where he first met Edward Fyers and Deathstroke.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e06",
    season_number: 1,
    episode_number: 6,
    episode_name: "Legacies ",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTAwNzUyODMwNzdeQTJeQWpwZ15BbWU3MDA3MDY3Njg@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver's next target is Scott Morgan, a power executive who jacks up prices for electricity when people most need it. John Diggle suggests they go after the gang of bank robbers that recently wounded a police officer during a daytime heist. Oliver is not so keen but John isn't the kind of guy who gives up very easily. Oliver quickly identifies one of them as a high school acquaintance, Derek Reston - and learns that Reston may have turned to crime because of something Oliver's father did. Tommy meanwhile isn't having much luck with his hoped for romance with Laurel. He seeks Thea's advice. Flashbacks show Oliver's doubts about his survival on the island.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e07",
    season_number: 1,
    episode_number: 7,
    episode_name: "Muse of Fire",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTg5NzY5NDM2OF5BMl5BanBnXkFtZTcwNzYxOTI3OA@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "A new vigilante is killing off the people that work for mob boss, Frank Bertinelli.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e08",
    season_number: 1,
    episode_number: 8,
    episode_name: "Vendetta ",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTk1OTE5NTU4N15BMl5BanBnXkFtZTcwMDc5Mjg3OA@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver Queen attempts to train Helena Bertinelli in the hopes that she will join him in his fight for justice. Meanwhile, Walter Steele delves deeper into his wife's secrets.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e09",
    season_number: 1,
    episode_number: 9,
    episode_name: "Year's End",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTM4ODAzMDAwOF5BMl5BanBnXkFtZTcwMDk5Mjg3OA@@._V1_SY317_CR132,0,214,317_AL_.jpg",
    synopsis: "Oliver Queen attempts to track down a mysterious copycat vigilante who is killing people on the list.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e10",
    season_number: 1,
    episode_number: 10,
    episode_name: "Burned",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTM3MTUwOTI5OV5BMl5BanBnXkFtZTcwNDM4MTM5OA@@._V1_SX214_AL_.jpg",
    synopsis: "Oliver's confidence is shaken after being beaten by the Dark Archer and he takes a break from being Arrow. However, when Laurel calls Arrow for help investigating a firefighter's suspicious death, he reluctantly agrees but his hesitance while fighting almost costs him his life. Meanwhile, Tommy throws a benefit for the firefighters and Thea tries to lift Moira out of her depressive state.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e11",
    season_number: 1,
    episode_number: 11,
    episode_name: "Trust But Verify",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTQyMDExODQ5OV5BMl5BanBnXkFtZTcwNjY1MDc5OA@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "After a string of violent armored car robberies, Oliver suspects that Ted Gaynor of Black Hawk Security is the mastermind. His name is also on the list. It leads to a major disagreement with Digg as Gaynor was his training officer on his first tour of duty in Afghanistan. Digg learns that people change. Meanwhile, Tommy is hesitant at his father's attempt at reconciliation - and with good reason. Thea celebrates a birthday but has trouble with the police when she's arrested after a car accident for driving under the influence of a narcotic.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e12",
    season_number: 1,
    episode_number: 12,
    episode_name: "Vertigo ",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTg2MTkxMzY3NV5BMl5BanBnXkFtZTcwNTI3NjAwOQ@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Thea is about to go to trial for being under the influence but she doesn't care because she is convinced that her mother was unfaithful to her father. Oliver tries to tell her the truth and he decides to go after who is behind the drug that she was on called Vertigo. So he tracks down one of the dealers and gets him to say who is the one behind it and he gets the name The Count. He eventually goes after him but the Count gives him some Vertigo which nearly kills him.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e13",
    season_number: 1,
    episode_number: 13,
    episode_name: "Betrayal ",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjA5MDI1NjEzOV5BMl5BanBnXkFtZTcwNjA1OTQwOQ@@._V1_SX214_AL_.jpg",
    synopsis: "Quentin Lance's ongoing attempt to capture the vigilante is put to a halt when a recently released criminal kidnaps his daughter to get to Arrow. Meanwhile, John Diggle insists on spying on Moira Queen to learn her secrets.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e14",
    season_number: 1,
    episode_number: 14,
    episode_name: "The Odyssey",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTQwOTcyMzI1MV5BMl5BanBnXkFtZTcwMzU3MDAxOQ@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver's heavy-handed approach to getting information from his mother backfires and she manages to shoot him in the shoulder. He turns to Felicity Smoak for help getting back to his hideaway. She and Digg do their best to nurse him back to health. Flashbacks to Oliver's time on the island reveals an early attempt to escape. Oliver's loyalties however prevent him from taking advantage of the situation. The reason for Yao Fei's betrayal is revealed.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e15",
    season_number: 1,
    episode_number: 15,
    episode_name: "Dodger",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTQ5NzY3ODcwMF5BMl5BanBnXkFtZTcwNDQ3MDAxOQ@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "A jewel thief known as the Dodger who coerces people to steal for him by strapping an explosive to them, is in town. So Oliver decides to use his family's jewels as bait to lure him. But he chooses someone close to Oliver to plant the explosive. Thea's purse is stolen by a young man and she sets out to find him. And when she finds him and has him arrested, her outlook changes when she hears why he stole. And Moira is trying to make contact with someone.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e16",
    season_number: 1,
    episode_number: 16,
    episode_name: "Dead to Rights",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BODcxMTQ1MDY0NV5BMl5BanBnXkFtZTcwMzIxOTYxOQ@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "The plan to kill Malcolm Merlyn goes into operation. Arrow kills one assassin who has just arrived in the city and retrieves his cellphone. It's up to Felicity to break into it and find out just who the target is. A birthday dinner for Tommy Merlyn is interrupted by his father who brings him a present. Tommy makes it clear that he is not welcome and does not want a relationship with him. Malcolm is to receive an award at a civic gala and after a heart to heart with Oliver, Tommy decides to attend. When Oliver learns that Malcolm is the target, he races to save Tommy. Once the attack begins, Malcolm and Tommy takes refuge in his office and Malcolm is about to reveal that he is the Dark Arrow but is seriously wounded before he can do so. Arrow arrives on the scene and to convince Tommy that he is there to help, reveals his identity.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e17",
    season_number: 1,
    episode_number: 17,
    episode_name: "The Huntress Returns",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTc3NDU4NTQ0Nl5BMl5BanBnXkFtZTcwNDkxNDQyOQ@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Helena is back to seek vengeance, but Oliver still has feeling toward her. The Arrow must stop and kill her, but at what costs? Now that several of his closest friends know about his true identity, no one is safe.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e18",
    season_number: 1,
    episode_number: 18,
    episode_name: "Salvation ",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BNDU4NjgxNzk4MV5BMl5BanBnXkFtZTcwMTgxNDQyOQ@@._V1_SY317_CR106,0,214,317_AL_.jpg",
    synopsis: "After a major fire, Oliver decides it's time to eliminate real estate developer and slumlord John Nicol, another person on his father's list. He's beaten to the punch when another vigilante, The Savior, who kidnaps Nicol and ultimately executes him - broadcasting the whole thing over the Internet. The new vigilante is identified as a man whose wife was killed in a bodega robbery in the Glades district. When he kidnaps Thea's new boyfriend, Roy Harper, Oliver decides to stop him. Meanwhile, Laurel is upset to find that her father has come around to her mother's belief that her sister may still be alive. In a flashback to his days on the island, Oliver learns why Yao Fei refused to leave.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e19",
    season_number: 1,
    episode_number: 19,
    episode_name: "Unfinished Business",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTEwNTc1MDEzNTheQTJeQWpwZ15BbWU3MDkwMDk5Mjk@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Vertigo is again appearing on the market even though The Count, who created the drug, is still in a psychiatric hospital. Soon after Oliver confirms that he's still there, he somehow manages to escape. The Count's psychiatrist says his patient overpowered him and has concluded that his insanity was just a ruse. The police suspect Tommy may be dealing drugs from the club and Det. Lance gets a search warrant. Oliver is not sure what to believe and Tommy, feeling his onetime friend has no respect for him, quits. He turns to his father for a job. Digg gives information about Deadshot to a former intelligence colleague. On the island meanwhile, Oliver begins to learn how to use a bow.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e20",
    season_number: 1,
    episode_number: 20,
    episode_name: "Home Invasion",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTcyMzY3NTI5MF5BMl5BanBnXkFtZTcwOTE5NDI0OQ@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver decides that his next target is going to be someone on Digg's list: Deadshot. They set a trap for him and Digg's spy friends get involved as well. Meanwhile, Laurel's latest clients are Eric and Nancy Moore who have agreed to testify against Edward Rasmus, a financial advisor who swindled them. The night before their deposition however, they are assassinated. Laurel takes charge of their now orphaned son, Taylor, but he saw his parents killed and is now the assassins next target. Oliver steps in to stop him but in doing so fails to back up Digg and Deadshot escapes. It creates a rift and Diggs walks out. A flashback to the island show Oliver, Wilson and Shado are preparing to free Yao Fei.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e21",
    season_number: 1,
    episode_number: 21,
    episode_name: "The Undertaking",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMzQxMjk0ODcyM15BMl5BanBnXkFtZTcwMDc0MzU0OQ@@._V1_SY317_CR96,0,214,317_AL_.jpg",
    synopsis: "After taking a mob accountant's laptop, Oliver plans to return the money to its rightful owners. Felicity however finds that Dominic Alonzo - the operator of an illegal casino and the head of a gang known for kidnapping - was paid $2 million to kidnap Walter. Arrow pays him a visit and is told that Walter is dead. He tells his mother and Thea but Moira rushes to Malcolm Merlyn demanding to know why he broke their agreement. He assures her that Walter is alive and will be released as long as she continues to cooperate. Oliver is listening to the entire conversation and now knows that his mother is involved, just as Digg had warned him. Flashbacks reveal Malcolm's plan and also the the sinking of Frank Queen's luxury yacht was no accident. Laurel meanwhile tries to make up with Tommy and finally learns the real reason he broke up with her.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e22",
    season_number: 1,
    episode_number: 22,
    episode_name: "Darkness on the Edge of Town",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMzAxNzU5OTA1OF5BMl5BanBnXkFtZTcwNjU0MzU0OQ@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "The time is fast approaching for the Undertaking to occur and Malcolm Merlyn begins to tidy up the loose ends, beginning with the scientists at UNIDAC. Oliver and Digg trick Moira into telling just what the Undertaking is about. Oliver realizes that even if he manages to eliminate everyone on his father's list he has only, in his own words, eliminated the symptoms and not the disease. Felicity locates the UNIDAC device - sort of. Thea and Roy's relationship comes to head when they are unable to locate the vigilante. Walter files for divorce. Laurel and Oliver begin a new relationship. In a flashback to his time on the island, Oliver learns just what Edward Fyers' plan is.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s01e23",
    season_number: 1,
    episode_number: 23,
    episode_name: "Sacrifice ",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTk4MzUyMjEzOF5BMl5BanBnXkFtZTcwNzAyMDg0OQ@@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver awakens to find himself Malcolm Merlyn's prisoner. He manages to escape and away with help from Digg. Malcolm accelerates his timetable as a result. Felicity is questioned by Det. Lance about her hacking activities but is interrupted by Oliver who tells him about Malcolm's plan to destroy the Glades. Tommy confronts Oliver about Laurel but refuses to believe that his father is up to no good. Malcolm comes clean about his plans and Tommy realizes that his father is insane. Moira goes public with what she knows, urging the residents of the Glades to evacuate. Roy and Thea get caught up in the mayhem. While Oliver and Digg go after Malcolm, Felicity tries to neutralize the device via Lance. Malcolm has planned it all very well, however. In a flashback to his time on the island, Fyers attempts to bring down an airliner.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e01",
    season_number: 2,
    episode_number: 1,
    episode_name: "City of Heroes",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTUxODEwMzU5Ml5BMl5BanBnXkFtZTgwODYwMTczMDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "It's been five months since the death of Tommy Merlyn and the destruction of the Glades. Oliver has been living alone on the island where he was marooned for 5 years. Digg and Felicity want him to return to Starling City and he agrees for his family's sake but he refuses to put on the hood. Roy and Thea are still together but she's not too keen on his efforts to deal with drug dealers. She's been running the nightclub during Oliver's absence but hasn't visited her mother. Queen Consolidated is in trouble and Isabel Rochev is out to gain control. Oliver turns to Walter Steele for help. Laurel Lance has joined the District Attorney's office and is present at a fund-raiser when the mayor is gunned down by vigilantes seeking revenge for what happened in the Glades. They then turn their sights on Oliver. In flashbacks to Oliver's time on the island, 5 months have passed since they stopped Fryers but they find others are on the island. Shado is soon taken prisoner.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e02",
    season_number: 2,
    episode_number: 2,
    episode_name: "Identity ",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjM1NDE1MDEzOF5BMl5BanBnXkFtZTgwNzcwMTczMDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Now that Oliver no longer has the list to work from, he's not sure what's next. Roy continues doing his own vigilantism and has to be bailed out of jail by Thea. When he mentions to Oliver that someone is hijacking medical deliveries to the Glades Memorial hospital, the Arrow knows exactly what he wants to do. His visit to the hospital doesn't go well when local politician Sebastian Blood takes him to task for what his family has done. When he tries to stop a hijacking, Arrow comes up against China White and her new partner Bronze Tiger. Thea tells Roy she's not going to wait around until he gets killed. The flashback to the island shows the aftermath of Oliver's violent attack on the unknown visitor. Shado takes him in hand.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e03",
    season_number: 2,
    episode_number: 3,
    episode_name: "Broken Dolls",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BOTUwNjA2OTY2N15BMl5BanBnXkFtZTgwOTMxOTkzMDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "When a dangerous criminal from Lance's past (MICHAEL EKLUND) escapes from prison, Felicity offers herself up as bait so Arrow, Diggle and Lance can capture him...but plans go awry.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e04",
    season_number: 2,
    episode_number: 4,
    episode_name: "Crucible",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BNDMwODA3NzQ2OF5BMl5BanBnXkFtZTgwMjczMzU0MDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver discovers a man who goes by the name 'The Mayor' is bringing illegal guns in to The Glades, so Oliver sponsors a 'Cash for Guns' event to help clean up the city. Unfortunately, The Mayor crashes the event with his gang and seriously injures Sin. The Canary is furious when she learns her friend is in the hospital and sets out for revenge. Meanwhile, Felicity stuns Oliver with a bit of information about the Canary, Donner asks Laurel to dinner, and Diggle reconnects with an old friend.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e05",
    season_number: 2,
    episode_number: 5,
    episode_name: "League of Assassins",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTEwNDg1MjgwODleQTJeQWpwZ15BbWU4MDYwNjUyNTAx._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "While Oliver tends to the Canary's wounds, he tries to get her to talk about where she came from but she refuses. However, after Oliver and Canary are attacked at the Queen mansion by a trained killer from the League of Assassins, she confesses to how she's connected with the nefarious group. Meanwhile with Moira facing multiple counts of murder and conspiracy for her part in the destruction of The Glades, the Assistant District Attorney offers her a choice - plead guilty now and avoid the death penalty or take your chances in court. Thea begs her mother to fight for her life but Moira seems resolute about taking the offer. Meanwhile, Oliver is furious with Laurel for joining the prosecution's team on his mother's case.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e06",
    season_number: 2,
    episode_number: 6,
    episode_name: "Keep Your Enemies Closer",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTgzNzMxMTUyM15BMl5BanBnXkFtZTgwODg3ODY1MDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Amanda Waller sends A.R.G.U.S. agents to kidnap Diggle. Waller informs Diggle that Lyla has gone missing after following a lead on Deadshot in Moscow. When Diggle tells the team he's headed to Russia to rescue Lyla, Oliver and Felicity decide to join, but things get messy when Isabel shows up on the tarmac and insists on joining Oliver's 'work trip'. Meanwhile, Moira's lawyer, Jean, tells Thea that dating Roy, a known criminal, is hurting her mother's case.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e07",
    season_number: 2,
    episode_number: 7,
    episode_name: "State vs Queen",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTk0MjQzMzUxN15BMl5BanBnXkFtZTgwNTM5MzM2MDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver is concerned when a mysterious illness sweeps the city, infecting hundreds of people, including Diggle. Oliver discovers Vertigo in Diggle's blood and realizes The Count has broken out of prison and is once again distributing his drug. Meanwhile, Moira goes on trial for her participation in the Undertaking. ADA Adam Donner collapses in court with Vertigo symptoms so Laurel must step in and try the case against Moira. Oliver is torn between standing by his family during the trial and catching The Count. However, things change when Felicity follows a lead and walks straight into a trap set by The Count.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e08",
    season_number: 2,
    episode_number: 8,
    episode_name: "The Scientist",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BOTYwODE3NDM5OF5BMl5BanBnXkFtZTgwNzkyNzM3MDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "A seemingly impossible robbery at Queen Consolidated's Applied Sciences Division brings Central City police scientist Barry Allen to town. Citing a similar case back home, Barry offers to help Oliver and team with the investigation. Oliver senses there is more to Barry than meets the eye, but he's distracted by the similarities between this current case and something that happened on the island. Meanwhile, Felicity takes a liking to Barry, which doesn't go unnoticed by Oliver. Sin asks Roy for help when a friend of hers goes missing. Roy is surprised when Thea not only encourages him to help, but joins the search. Unfortunately, Sin's friend is connected to Brother Blood, and their search ultimately gets one of them seriously injured.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e09",
    season_number: 2,
    episode_number: 9,
    episode_name: "Three Ghosts",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BNTA1Nzc3NDA4N15BMl5BanBnXkFtZTgwNTUyNTc3MDE@._V1_SY317_CR130,0,214,317_AL_.jpg",
    synopsis: "After a fight with Cyrus Gold AKA the Acolyte, Oliver is drugged and left for dead. Determined to cure him, Felicity makes a risky decision. The cure causes Oliver to hallucinate, and what he sees forces him to confront his past. Meanwhile, Barry Allen continues to help Felicity, and their connection grows stronger. The Arrow asks Quentin to look into Gold, but when the stakeout on Gold goes bad, someone is killed. Roy is captured and tortured by Brother Blood.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e10",
    season_number: 2,
    episode_number: 10,
    episode_name: "Blast Radius",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTUyNDgxMjEyOV5BMl5BanBnXkFtZTgwMjk0Njg4MDE@._V1_SY317_CR130,0,214,317_AL_.jpg",
    synopsis: "Oliver must tackle a new threat to the city when bombs start to go off in Starling City. Felicity discovers the person setting them off is Mark Scheffer, a man who goes by the nickname Shrapnel. The Arrow discovers Shrapnel's next target is Sebastian Blood's 'Unity Rally' and tries to talk the alderman out of hosting it, but he refuses. The Arrow sets off to stop the bombing, but Shrapnel tricks him and traps him in a bomb-laced antique store where he is unable to move without setting off the device. While Felicity helps Oliver, Diggle races to the plaza to find the bomb before it goes off. Meanwhile, Roy continues to hide his new strength from Thea but, after she witnesses his super strength in action at the rally, she demands answers. Laurel's suspicions about Sebastian grow stronger once she learns that he grew up with Cyrus Gold, the man who killed Lance's partner. After Donner refuses to help her investigate, she turns to The Arrow for help.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e11",
    season_number: 2,
    episode_number: 11,
    episode_name: "Blind Spot",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjIyMjk3MTAyMF5BMl5BanBnXkFtZTgwMzUwNTIwMTE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver is conflicted after Laurel reaches out to the Arrow asking him to investigate Sebastian Blood. Oliver is unsure whether to believe her accusations against the man he has publicly supported for mayor, but decides to trust Laurel. However, when the pair gets too close to the truth, Sebastian exposes Laurel's drug addiction and has her arrested. Meanwhile, Roy reveals his new super-strength to Sin who wants to test out his abilities. Unfortunately, Roy isn't able to contain his rage once unleashed and almost kills a man. Back on the island, Oliver is surprised when Sarah reveals a secret about Laurel.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e12",
    season_number: 2,
    episode_number: 12,
    episode_name: "Tremors ",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTgwNzQ3NTI2Ml5BMl5BanBnXkFtZTgwNDkzODUwMTE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Arrow offers to train Roy so he can learn to control his newfound super-strength. However, Roy is a rebellious student and refuses to listen unless Arrow reveals his true identity, which Oliver refuses to do. Meanwhile, the Bronze Tiger escapes from prison and steals Malcolm's earthquake machine to sell to the highest bidder. Oliver, Diggle and Felicity attempt to stop the transfer, but Roy gets in the way, putting everyone in danger. Laurel is disbarred and spirals out of control. Moira is thrilled when Walter asks her to dinner, but his reason surprises her. Thea encourages her mother to ask Walter to reconcile.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e13",
    season_number: 2,
    episode_number: 13,
    episode_name: "Heir to the Demon",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjI4OTcxODU3M15BMl5BanBnXkFtZTgwNjg5MzIxMTE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Laurel continues to unravel, Oliver and Lance try to convince Sara to stay in Starling City and finally reunite with Laurel and Dinah. However, Sara's fellow League of Assassins member, Nyssa, comes to bring Sara back to the fold, but when Sara refuses, Nyssa kidnaps Dinah. Realizing she's putting her family in danger by staying in town, Sara considers re-joining the league.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e14",
    season_number: 2,
    episode_number: 14,
    episode_name: "Time of Death",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjMwODkxNTI3M15BMl5BanBnXkFtZTgwODg0NjEyMTE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver brings Sara into the Arrow team. Watching Oliver and Diggle spar with Sara and talk old scars, Felicity starts to feel left out. The team is investigating a villain named William Tockman, a.k.a. The Clock King, who is a brilliant thief armed with technology that can open any bank vault in Starling City. After The Clock King infiltrates the computer systems in the lair, Felicity feels pressure to prove her worth. When she gets a lead on Tockman's whereabouts, she heads out without the team, putting her in peril. Meanwhile, Oliver throws Sara a welcome home party, but Laurel refuses to attend. After Lance makes his case for a family dinner, Laurel acquiesces, but when Oliver shows up with Sara, she loses her temper on both of them.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e15",
    season_number: 2,
    episode_number: 15,
    episode_name: "The Promise",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BOTM4NDIwNTU0Nl5BMl5BanBnXkFtZTgwNjcyNzEzMTE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver is shocked when he learns that Slade has come to Starling City. Back on the island, as Oliver, Slade and Sara prepare to take over the freighter from Ivo, Sara pulls Oliver aside and tells him he needs to kill Ivo to prevent him from telling Slade what happened with Shado. Oliver feels immense guilt over the situation but realizes Slade's growing rage from the Mirakuru makes him unpredictable and he could turn on his friends if he thinks Oliver is to blame. Oliver agrees to kill Ivo and the battle begins.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e16",
    season_number: 2,
    episode_number: 16,
    episode_name: "Suicide Squad",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTAxMTMyNzg4MDNeQTJeQWpwZ15BbWU4MDAyNjEwNDEx._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Lyla asks Diggle to go on a mission alongside the Suicide Squad, a team assembled by Amanda Waller to undertake high-risk missions, even though the team includes Diggle's nemesis, Deadshot, and Oliver's enemy, Bronze Tiger.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e17",
    season_number: 2,
    episode_number: 17,
    episode_name: "Birds of Prey",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BOTUzOTQ1OTk3OV5BMl5BanBnXkFtZTgwNzEwMjY0MTE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "When Frank Bertinelli is arrested, Oliver knows it's only a matter of time before his daughter, Helena, AKA The Huntress, returns to town. To make matters worse, Laurel is picked to try Frank's case, putting her right in the path of Helena. Oliver tells Sara he will handle his ex-girlfriend, but when Helena takes hostages at the courthouse, including Laurel, the Canary will stop at nothing to save her sister. When The Huntress and Canary meet, an epic battle begins. Meanwhile, Roy realizes he needs to keep Thea safe, but doesn't like the way he is forced to go about it.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e18",
    season_number: 2,
    episode_number: 18,
    episode_name: "Deathstroke ",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTkzNDMwNTUyNV5BMl5BanBnXkFtZTgwODM1MDc0MTE@._V1_SY317_CR130,0,214,317_AL_.jpg",
    synopsis: "After taking a ride home from Slade, Thea becomes his prisoner. Can Oliver and his friends save her? Also, someone close to Oliver is working for Slade, since his return from the Island after Tommy's death.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e19",
    season_number: 2,
    episode_number: 19,
    episode_name: "The Man Under the Hood",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTc1ODY0NjcyNl5BMl5BanBnXkFtZTgwNTc5Nzg1MTE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver, Canary, Diggle, and Felicity return to the lair and find Slade waiting for them. An epic battle breaks out and one member of Team Arrow is sent to the hospital. Thea hits her breaking point, but just as Oliver is about to reach her, Slade intervenes and Oliver is faced with a choice - his battle with Slade or his family. Meanwhile, Laurel struggles with a new secret.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e20",
    season_number: 2,
    episode_number: 20,
    episode_name: "Seeing Red",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjMwMDQ2OTAyMV5BMl5BanBnXkFtZTgwMTg5NDQ2MTE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "The mirakuru sends Roy into a rage rampage across the city. Sara thinks that the only way to stop him is to kill him but Oliver thinks he can still save him. Meanwhile, Slade is continuing his plan to make Oliver pay.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e21",
    season_number: 2,
    episode_number: 21,
    episode_name: "City of Blood",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTgxMzc1MDc1OF5BMl5BanBnXkFtZTgwMDA5ODY2MTE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "After Slade threatens to take everything Oliver loves away, Oliver decides the fastest way to stop further bloodshed is to surrender to his enemy. Knowing that surrender will surely lead to Oliver's death, Diggle and Felicity go to extreme measures to keep Oliver from confronting Slade. Meanwhile, Thea considers leaving town, and Laurel resumes her crusade against Sebastian Blood. Finally, Slade unleashes his assault on Starling City.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e22",
    season_number: 2,
    episode_number: 22,
    episode_name: "Streets of Fire",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjMwMzI2NDMyMl5BMl5BanBnXkFtZTgwOTgyODI3MTE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver rallies his team as Slade's soldiers attack the city. Felicity gets a call from S.T.A.R. Labs with game-changing news and Thea comes face-to-face with her father.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s02e23",
    season_number: 2,
    episode_number: 23,
    episode_name: "Unthinkable ",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTQ2MDUzODczOV5BMl5BanBnXkFtZTgwODg2ODk3MTE@._V1_SY317_CR120,0,214,317_AL_.jpg",
    synopsis: "As Oliver's face off with Slade escalates, his resolve to the no-kill rule is tested. Especially as Slade targets the woman Oliver loves.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e01",
    season_number: 3,
    episode_number: 1,
    episode_name: "The Calm",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTQ3NDEyMjYzMV5BMl5BanBnXkFtZTgwNTIyODE2MjE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "As a new enemy emerges seven months after Slade's attack upon Starling City, Oliver battles with the help of his teammate Roy. However, with the Arrow's presence elsewhere someone he had loved dearly is hurt.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e02",
    season_number: 3,
    episode_number: 2,
    episode_name: "Sara",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTk4MDkyNTMzM15BMl5BanBnXkFtZTgwMjQ5NjM5MjE@._V1_SY317_CR121,0,214,317_AL_.jpg",
    synopsis: "Team Arrow is in pursuit of a new villain who poses a threat to Starling City. Meanwhile, Oliver is worried about not having heard from Thea.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e03",
    season_number: 3,
    episode_number: 3,
    episode_name: "Corto Maltese",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjMzMzQ3Mzk5MF5BMl5BanBnXkFtZTgwOTU5NjM5MjE@._V1_SY317_CR145,0,214,317_AL_.jpg",
    synopsis: "Oliver decides it's time for Thea to come back to Starling City, so he packs for Corto Maltese, where Felicity has traced Thea's whereabouts. Lyla asks Diggle to go with Oliver because one of her field operatives, Mark Shaw, has gone dark in Corto Maltese and she'd like him to look into it. Feeling responsible for Thea's departure, Roy joins Oliver and Diggle on their journey. Shaw double-crosses Diggle, putting numerous A.R.G.U.S. agents, including Lyla, at risk. Meanwhile, Laurel meets Ted Grant, and Felicity adjusts to her new job.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e04",
    season_number: 3,
    episode_number: 4,
    episode_name: "The Magician",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTgyMjA1OTE4OV5BMl5BanBnXkFtZTgwNDk2OTcxMzE@._V1_SY317_CR104,0,214,317_AL_.jpg",
    synopsis: "Nyssa and Oliver join forces to go after the Dark archer.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e05",
    season_number: 3,
    episode_number: 5,
    episode_name: "The Secret Origin of Felicity Smoak",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTUwODY3MTI1NF5BMl5BanBnXkFtZTgwNTY0MDEyMzE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Felicity's family and backstory come to the fore. Felicity tries to find common ground with her mother but it is clear the two are very different.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e06",
    season_number: 3,
    episode_number: 6,
    episode_name: "Guilty",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTExNDEyNDQzNDFeQTJeQWpwZ15BbWU4MDIwNTIxNDMx._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Ted Grant becomes the primary suspect when a body is found in the Wildcat gym and Roy shares a secret with Felicity.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e07",
    season_number: 3,
    episode_number: 7,
    episode_name: "Draw Back Your Bow",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjI5NDIwNjg5MF5BMl5BanBnXkFtZTgwNDM0ODQ0MzE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Oliver must stop an Arrow-obsessed serial killer, Carrie Cutter, who is convinced that The Arrow is her one true love and will stop at nothing to get his attention. Unfortunately, her way of getting his attention is to kill people. Meanwhile, Ray asks Felicity to be his date for a work dinner with important clients. Thea auditions new DJs for Verdant and meets Chase, a brash DJ with whom she immediately clashes.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e08",
    season_number: 3,
    episode_number: 8,
    episode_name: "The Brave and the Bold",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTU2MzM3MDU3N15BMl5BanBnXkFtZTgwNzgwMzc0MzE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "As Oliver, Arsenal, and Diggle pursue a killer named Digger Harkness, they encounter an ARGUS team; Oliver and the Flash team up to try and stop Harkness.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e09",
    season_number: 3,
    episode_number: 9,
    episode_name: "The Climb",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BNzIyNjA3NDE3N15BMl5BanBnXkFtZTgwNTM1NzA2MzE@._V1_SX214_AL_.jpg",
    synopsis: "The League of Assassins give Oliver 48 hours to find Sara's killer, or Starling City citizens will die. Oliver then has an epic confrontation with Ra's al Ghul.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e10",
    season_number: 3,
    episode_number: 10,
    episode_name: "Left Behind",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjM1MTM0MTgyMl5BMl5BanBnXkFtZTgwNDQzNzkwNDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "The Team's worst fears are realized when Meryln informs them of Oliver's death. Meanwhile Ray Palmer tests part of his ATOM suit out and Laurel Lance decides to pursue justice outside of the law by taking up the mantle of the Black Canary.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e11",
    season_number: 3,
    episode_number: 11,
    episode_name: "Midnight City",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BNTcwOTIwNjc3Ml5BMl5BanBnXkFtZTgwNDU0NjUxNDE@._V1_SX214_AL_.jpg",
    synopsis: "Arsenal and Diggle confront Laurel about trying to step into her sister's shoes and warn her to stop before she gets herself killed. However, the villan Brick kidnaps the city's Aldermen and threatens to kill them all unless the police evacuate The Glades, it's all suits on deck. Meanwhile, Ray steps in to help Lance and the police force fight Brick, showing Felicity a new side of her boss. Malcom tells them that Ra's al Ghul is after his family and they must leave town immediately.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e12",
    season_number: 3,
    episode_number: 12,
    episode_name: "Uprising ",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BNjYwOTU2MDczM15BMl5BanBnXkFtZTgwOTY3NDYyNDE@._V1_SY317_CR130,0,214,317_AL_.jpg",
    synopsis: "Still operating without Oliver and desperate to stop Brick, Team Arrow is forced to consider Malcolm's offer to help shut Brick down as Malcolm has a personal score to settle with the felon. Roy and Laurel point out that the team could use some help to save the innocents of The Glades, but Felicity is adamantly against it. They look to Diggle to make the final decision. Meanwhile, the flashbacks chronicle Malcolm's descent from kind-hearted father and husband to cold-blooded killer after the murder of his wife.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e13",
    season_number: 3,
    episode_number: 13,
    episode_name: "Canaries ",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTU3NTYwNDQxM15BMl5BanBnXkFtZTgwNjE1OTkzNDE@._V1_SY317_CR130,0,214,317_AL_.jpg",
    synopsis: "Oliver struggles to adjust to the changes that have taken place within Team Arrow; Laurel ignores Oliver and pursues Vertigo - who injects her with the drug; Thea receives a surprise visitor.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e14",
    season_number: 3,
    episode_number: 14,
    episode_name: "The Return",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjE5NDI5NzE4OV5BMl5BanBnXkFtZTgwMzM2NDQ0NDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "Malcolm puts Oliver and Thea in a dangerous situation that lands them on Lian Yu with Oliver's former enemy, Deathstroke. A flashback reveals when Oliver and Maseo returned to Starling City to retrieve the Omega bio weapon, and despite being under strict orders from Amanda Waller not to reveal himself to anyone, Oliver looks in on his family, Laurel and Tommy.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e15",
    season_number: 3,
    episode_number: 15,
    episode_name: "Nanda Parbat",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMjM4NzIwNDQ5NV5BMl5BanBnXkFtZTgwMzQ1MTIzNDE@._V1_SX214_AL_.jpg",
    synopsis: "Malcolm is captured by Ra's al Ghul and taken to Nanda Parbat. Because of his love for Thea, Oliver considers saving Merlyn. Ray is obsessed with finishing his Atom suit so he can save the city but Felicity fears he is heading down the same path as Oliver and tries to pull him out of the lab.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e16",
    season_number: 3,
    episode_number: 16,
    episode_name: "The Offer",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BNzk5OTE3MDY3N15BMl5BanBnXkFtZTgwNzA2NTM4NDE@._V1_SY317_CR118,0,214,317_AL_.jpg",
    synopsis: "Oliver thinks about the offer Ra's Al Ghul gave him, but to do so theres a catch.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    episode_id: "s03e17",
    season_number: 3,
    episode_number: 17,
    episode_name: "Suicidal Tendencies",
    duration_time: 43,
    episode_poster:"http://ia.media-imdb.com/images/M/MV5BMTg0Nzg3Nzc1MV5BMl5BanBnXkFtZTgwMDQzNTM4NDE@._V1_SY317_CR131,0,214,317_AL_.jpg",
    synopsis: "It's celebration time as Diggle and Lyla get married. However, Deadshot interrupts their honeymoon and tells them the Suicide Squad has been given a new mission - rescue United States Senator Joseph Cray from a hostage situation in the Republic of Kasnia. Amanda Waller breaks down the mission and introduced them to the newest member of the Suicide Squad, Cupid. Meanwhile, Oliver learns about Ray's new Atom costume and the two have a heated stand-off. Felicity and Ray hit a rough patch.",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "heroes",
    episode_id: "s01e02",
    season_number: 1,
    episode_number: 2,
    episode_name: "S01E02",
    duration_time: 60,
    synopsis: "S01E02",
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, function() {
    console.log("finished populating episodes");
  })
});

Show.find({}).remove(function() {
  Show.create({
    show_id: "24",
    name: "24",
    synopsis: "ack Bauer, Director of Field Ops for the Counter-Terrorist Unit of Los Angeles, races against the clock to subvert terrorist plots and save his nation from ultimate disaster.",
    status: "Finished",
    poster: "http://pics.filmaffinity.com/24_Serie_de_TV-375460855-large.jpg",
    network: "FOX",
    genre: ["Action", "Drama", "Mystery"],
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "thewalkingdead",
    name: "The Walking Dead",
    synopsis: "Sheriff's Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
    status: "Airing",
    poster: "http://whstherebellion.com/wp-content/uploads/2013/12/The-Walking-Dead-01-poster.jpg",
    network: "AMC",
    genre: ["Drama", "Horror"],
    notes: {
      one_stars: 589,
      two_stars: 125,
      three_stars: 15,
      four_stars: 89548,
      five_stars: 89999
    }
  }, {
    show_id: "heroes",
    name: "Heroes",
    synopsis: "The lives of common people, who discover they have superpowers, intertwine in order to save the world from different threats.",
    status: "Finished",
    poster: "http://tvstock.net/sites/default/files/poster-heroes-season-1.jpg",
    network: "NBC",
    genre: ["Drama", "Sci-Fi", "Thriller"],
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  },{
    show_id: "arrow",
    name: "Arrow",
    synopsis: "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
    status: "Finished",
    poster: "http://ia.media-imdb.com/images/M/MV5BMTg3OTc0NzkyOV5BMl5BanBnXkFtZTgwMDMwMTM3MjE@._V1_SX214_AL_.jpg",
    network: "CW",
    genre: ["Action", "Adventure", "Crime"],
    notes: {
      one_stars: 0,
      two_stars: 0,
      three_stars: 0,
      four_stars: 0,
      five_stars: 0
    }
  }, {
    show_id: "theflash",
    name: "The Flash (2014)",
    synopsis: "Barry Allen wakes up 9 months after he was struck by lightning and discovers that the bolt gave him the power of super speed. With his new team and powers, Barry becomes The Flash and fights crime in Central City.",
    status: "On TV",
    poster: "http://ia.media-imdb.com/images/M/MV5BMTQ5MzY5ODE5M15BMl5BanBnXkFtZTgwNzU4OTM1MjE@._V1_SX214_AL_.jpg",
    network: "CW",
    genre: ["Drama", "Action", "Adventure"],
    notes: {
      one_stars: 0,
      two_stars: 2,
      three_stars: 25,
      four_stars: 458,
      five_stars: 856
    }
  }, function() {
    console.log("finished populating shows");
  })
});
