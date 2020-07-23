const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const Ddos = require('ddos');
const {whitelist, ddosConfig} = require('./config');
const morgan = require('morgan');
const winston = require('./logger/winston');

const ddosInstance = new Ddos(ddosConfig);

const crimehero = require('./api/crimehero');

const corsOptions = {
  exposedHeaders: 'x-client-id',
  origin: (origin, callback) => {
    if (!whitelist || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

const server = express();

server.use(morgan('combined', {stream: winston.stream}));
server.use(ddosInstance.express);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(compress());
server.use(helmet());
server.use(cors(corsOptions));
server.use('/', crimehero);

server.use((err, req, res, next) => {
  winston.error('Internal Server Error');
  res.status(500).send('500. Internal Server Error');
  next();
});

module.exports = server;
