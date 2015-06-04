"use strict";

var express = require("express");
var controller = require("./show.controller");
var config = require("../../config/environment");
var auth = require("../../auth/auth.service");

var router = express.Router();

router.get("/", controller.index);
router.post("/", auth.hasRole('admin'), controller.create);
router.get("/:show_id", controller.show);
router.delete("/:show_id", auth.hasRole('admin'), controller.destroy);
router.put("/:show_id", auth.hasRole('admin'), controller.update);
router.patch("/:show_id/:stars", auth.hasRole('admin'), controller.ratings);

module.exports = router;
