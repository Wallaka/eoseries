"use strict";

var express = require("express");
var controller = require("./comment.controller");
var config = require("../../config/environment");
var auth = require("../../auth/auth.service");

var router = express.Router();

router.get("/:show_id", controller.index);
router.get("/:show_id/:episode_id", controller.show);
router.post("/", auth.isAuthenticated(), controller.create);
router.put("/:comment_id", auth.isAuthenticated(), controller.update);
router.delete("/:comment_id", auth.isAuthenticated(), controller.destroy);

module.exports = router;
