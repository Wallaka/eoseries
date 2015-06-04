"use strict";

var express = require("express");
var controller = require("./episode.controller");
var config = require("../../config/environment");
var auth = require("../../auth/auth.service");

var router = express.Router();

router.get("/:show_id", controller.index);
router.post("/", auth.hasRole('admin'), controller.create);
router.get("/:show_id/:episode_id", controller.show);
router.delete("/:show_id/:episode_id", auth.hasRole('admin'), controller.destroy);
router.put("/:show_id/:episode_id", auth.hasRole('admin'), controller.update);

module.exports = router;
