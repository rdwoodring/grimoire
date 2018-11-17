import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './routes/index';

const /* express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    indexRouter = require('./routes/index'), */
    app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);

// module.exports = app;
export default app;