'use strict';

var should = require('should');
var app = require('../../app');
var Comment = require('./comment.model');

var comment = new Comment({
  show_id: "arrow",
  episode_id: "",
  author: "Bastien",
  content: "this is a mock comment"
});

describe('Comment Model', function() {
  before(function(done) {
    // Clear comments before testing
    Comment.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    Comment.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no show', function(done) {
    Comment.find({}, function(err, comments) {
      comments.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate comment', function(done) {
    comment.save(function() {
      var showDup = new Comment(comment);
      showDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving without an show_id', function(done) {
    comment.show_id = '';
    comment.save(function(err) {
      should.exist(err);
      done();
    });
  });
});
