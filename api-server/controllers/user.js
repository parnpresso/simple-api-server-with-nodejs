'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.list = function (req, res) {
  User.find({}, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.create = function (req, res) {
  var new_user = new User(req.body);
  new_user.save(function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};
