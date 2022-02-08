var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var urlRouter = require('./routes/url');
var redirectRouter = require('./routes/redirect');
var googleRouter = require('./routes/google');

var app = express();

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));

const passport = require('passport');


app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/home', indexRouter);
app.use('/users', usersRouter);
app.use('/shortenurl', urlRouter);
app.use('/', redirectRouter);
app.use('/google', googleRouter);

// catch 404 and forward to error handler
app.use(function(err,req, res, next) {
  console.log(err.message);
  //next(createError(404));
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
