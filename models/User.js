var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
  ID: {
    type: String
  },
  PW: {
    type: String
  }
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);