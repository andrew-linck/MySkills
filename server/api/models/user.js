var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({                     
  paypal_email: {
  },
  fortnite_username: {
  },
  password: {
  }
});

var User = mongoose.model('user', UserSchema);
module.exports = User;
