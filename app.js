var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
// var firebase = require('firebase');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


app.use(express.static(path.resolve(__dirname, 'public')));


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


module.exports = app;
app.listen(3000, function () {
    console.log("Localhost 3000")
});