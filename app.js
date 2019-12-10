var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// RUTAS AQUI :::::::

const cargoRouter = require("./routes/cargo.route");


// Aqui Usa APP
const app = express();
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// HOLA MUNDO
app.get('/',function(req,res){
  res.send('Funciona xD');
  res.end();
});

// MODELO >>> RUTAS
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cargo',cargoRouter);
app.use('/cargo',cargoRouter);
app.use('/cargo',cargoRouter);
app.use('/cargo',cargoRouter);
app.use('/cargo',cargoRouter);
app.use('/cargo',cargoRouter);
app.use('/cargo',cargoRouter);
app.use('/cargo',cargoRouter);


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


// PUERTO 
app.listen(3000,function(){
  console.log('Servidor Iniciado');
});