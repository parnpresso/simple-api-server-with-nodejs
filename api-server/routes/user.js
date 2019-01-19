'use strict';
module.exports = function (app) {
  var user = require('../controllers/user');

  app.route('/users')
    .get(user.list)
    .post(user.create);
};
