var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tourneySchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  state: {
    type: String,
  },
  participants: [
  ]
});

var Tourney = mongoose.model('tourney', tourneySchema);
module.exports = Tourney;
