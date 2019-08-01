import createError from 'http-errors';
import express from 'express';
import { createServer } from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import bodyParser from 'body-parser'; 
import methodOverride from 'method-override';

import indexRouter from './routes/index';
import adminRouter from './routes/admin';

const app = express();
const server = createServer(app);


mongoose.connect('mongodb://localhost:27017/surf_shop', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// configure routes
app.use('/', indexRouter);
app.use("/admin", adminRouter);

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

// Set port
const port = process.env.PORT || 5000;

// Use mongoose promise library
mongoose.Promise = require('bluebird');


server.listen(port, ()=> {
  console.log(`server running on port ${port}`);
});