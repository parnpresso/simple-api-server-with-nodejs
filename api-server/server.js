var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes/user');

var app = express();
var port = process.env.PORT || 8000;

User = require('./models/user');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://db`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log('API server started on: ' + port);
