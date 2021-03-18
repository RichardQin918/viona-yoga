const createError = require('http-errors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs = require('ejs')

const indexRouter = require('./routes/index');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// view engine setup
app.engine('html', ejs.renderFile)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img',express.static(path.join(__dirname, 'public/img')))
app.use('/js',express.static(path.join(__dirname, 'public/js')))
app.use('/vendor',express.static(path.join(__dirname, 'public/js/vendor')))
app.use('/bower_components',express.static(path.join(__dirname, 'public/js/bower_components')))
app.use('/amcharts',express.static(path.join(__dirname, 'public/js/amcharts')))
app.use('/css',express.static(path.join(__dirname, 'public/css')))
app.use('/scss',express.static(path.join(__dirname, 'public/scss')))
app.use('/public',express.static(path.join(__dirname, 'public')))


app.use('/', indexRouter);

// catch 404 and forward to error handler

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.use(logger('dev'));


module.exports = app;
