var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');





//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mailsenderRouter = require('./routes/mailsender');
var contactController =  require('./routes/contactController');
var personalDetailsController = require('./routes/personalDetailsController');
const cors = require("cors");
const bodyParser = require("body-parser");
var app = express();

// view engine setup
app.set('views', path.join(__dirname,'../src/index.html'));

//configure the Express middleware to accept CORS requests and parse request body into JSON

app.use(cors())
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
let distPath = path.join( __dirname , '../dist/my-portfoilo');
app.use(express.static(distPath));




app.use('/users', usersRouter);
app.use('/sendmail', mailsenderRouter);
app.use('/contact',contactController);
app.use('/personalDetails',personalDetailsController)

//let p = path.join(__dirname,'../src/index.html');
app.get('/*', function(req,res) { 
res.sendFile(path.join(__dirname,'../src/index.html'));});
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
  //res.render('error');
});

module.exports = app;
