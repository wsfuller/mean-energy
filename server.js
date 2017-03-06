var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var passport = require('passport');
var config = require('./config/main');

mongoose.connect(config.database);

var index = require('./routes/index');
var users = require('./routes/users.routes');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

var port = process.envPORT || 1337;

app.use('/', index);
app.use('/api/v1/users', users);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  if(err.status == 404){
    res.sendFile(__dirname + '/app/404.html');
  } else {
    next(err);
  }
});

app.listen(port);
console.log('Server running on port ' + port);
