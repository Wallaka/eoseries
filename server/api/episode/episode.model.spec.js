"use strict";

var should = require("should");
var app = require("../../app");
var Episode = require("./episode.model");

var episode = new Episode({
  show_id: "24",
  episode_id: "s01e01",
  season_number: 1,
  episode_number: 1,
  episode_name: "S01E01",
  duration_time: 60,
  synopsis: "This is the first episode of the first season.",
  notes: {
    one_stars: 1,
    two_stars: 2,
    three_stars: 3,
    four_stars: 4,
    five_stars: 5
  }
});

describe("Episode Model", function() {
  before(function(done) {
    // Clear users before testing
    Episode.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    Episode.remove().exec().then(function() {
      done();
    });
  });

  it("should begin with no episodes", function(done) {
    Episode.find({}, function(err, users) {
      users.should.have.length(0);
      done();
    });
  });

  it("should fail when saving a duplicate episode", function(done) {
    episode.save(function() {
      var userDup = new Episode(episode);
      userDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it("should fail when saving without an episode name", function(done) {
    episode.episode_name = "";
    episode.save(function(err) {
      should.exist(err);
      done();
    });
  });
});
