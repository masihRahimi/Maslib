var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config()

var explayouts = require('express-ejs-layouts')

var indexRouter = require('./routes/index');
var IslamicRouter = require('./routes/Islamic')
var HistoryRouter = require('./routes/History')
var PoliticsRouter = require('./routes/Politics')
var ScienceRouter = require('./routes/Science')
var OurserviceRouter = require('./routes/Ourservice')
var ContactUsRouter = require('./routes/ContactUs')
var HelpRouter = require('./routes/Help')

var app = express();

// database connection
var mongoose = require('mongoose');
 mongoose.connect(process.env.DB_URL);
var contactusmodel = ('./Models/contactus')
var booksmodel = require('./Models/books') 



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', './layout')


app.use(explayouts)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/Islamic', IslamicRouter)
app.use('/History', HistoryRouter)
app.use('/Politics', PoliticsRouter)
app.use('/Science', ScienceRouter)
app.use('/Ourservice', OurserviceRouter)
app.use('/ContactUs', ContactUsRouter)
app.use('/Help', HelpRouter)
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
