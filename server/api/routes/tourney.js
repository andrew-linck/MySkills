const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Tourney = require('../models/tourney');

router.get("/tourney/:id", (req, res, next) => {
	res.json(req.query)
});
router.get("/tourney/:id/update", (req, res, next) => {
	res.json(req.query)
});

module.exports = router;
