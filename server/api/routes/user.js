const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require('../models/user');

router.get("/create_account", (req, res, next) => {
    var paypal = JSON.parse(req.query.paypal_email)
    var fortnite = JSON.parse(req.query.fortnite_username)
    User.create({'paypal_email': paypal, 'fortnite_username': fortnite, 'password': password}, function(result, err) { 
    if (!paypal || !fortnite || !password) {
      res.status(401).json("unauthorized")
    } else {
      res.status(200).json("success")
    }
    })
});
router.get("/login", (req, res, next) => {
    var fortnite = JSON.parse(req.query.fortnite_username)
    User.findOne({'fortnite_username': fortnite}, function(result, err) {
    if (!result) {
      res.status(200).json("success")
    }
    })

});

module.exports = router;
