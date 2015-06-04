'use strict';

var should = require('should');
var app = require('../../app');
var Show = require('./show.model');

var show = new Show({
  show_id: "the100",
  name: "the 100",
  synopsis: "none",
  status: "On Air",
  network: "ABC",
  genre: ["Drama", "Adventure"],
  notes: {
    one_stars: 0,
    two_stars: 89,
    three_stars: 0,
    four_stars: 488,
    five_stars: 9856
  }
});

describe('Show Model', function() {
  before(function(done) {
    // Clear shows before testing
    Show.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    Show.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no show', function(done) {
    Show.find({}, function(err, shows) {
      shows.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate show', function(done) {
    show.save(function() {
      var showDup = new Show(show);
      showDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving without an name', function(done) {
    show.name = '';
    show.save(function(err) {
      should.exist(err);
      done();
    });
  });
});
