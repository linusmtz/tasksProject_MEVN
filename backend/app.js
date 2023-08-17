var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config();

var app = express();

var crudRouter = require('./routes/crud');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var logoutRouter = require('./routes/logout');
var updateUserInfoRouter =require('./routes/updateUserInfo')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/',crudRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/',logoutRouter);
app.use('/',updateUserInfoRouter);







mongoose.connect(process.env.URI_MONGO)
.then(()=>{
  console.log('Successfully connected!');
}).catch((error)=>{
  console.log('Failure at connection')
  console.log(error);
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
