'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  username: {
    type: String,
    required: 'Please enter username'
  },
  email: {
    type: String,
    required: 'Please enter email'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Users', UserSchema);
