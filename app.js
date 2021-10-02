const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const Cron = require('./controllers/cron')
const docRouter = require('./routes/document');
const usersRouter = require('./routes/users');

const app = express();

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

app.use('/doc', docRouter);
app.use('/user', usersRouter);

app.use('/',express.static(path.join(__dirname, 'website')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'website', 'index.html'));
});


Cron.cronTask()

module.exports = app;
