const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const MongoStore = require('connect-mongo')(session);

const accountRoutes = require("./api/routes/user");
const tourneyRoutes = require("./api/routes/tourney");

mongoose.connect("mongodb://localhost/tourney", { useNewUrlParser: true })
    .then(function (db) {
  })
  .catch(function (err) {} )
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

app.use(express.static('dist'));

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db,
    stringify: false
  })
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(accountRoutes);
app.use(tourneyRoutes);

module.exports = app;
