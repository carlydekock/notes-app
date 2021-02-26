'use strict';

require('dotenv').config();
//3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//Esoteric Resources
const errorHandler = require('./auth/error-handlers/500.js');
const notFound = require('./auth/error-handlers/404.js');
const authRoutes = require('./auth/routes.js');
// const logger = require('./middleware/logger.js');
const routes = require('./routes/v2.js');
const methodOverride = require('method-override');


const app = express();



app.use(methodOverride('_method'));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.use(authRoutes);
app.use(routes);

//Routes

//Catchalls
app.use('*', notFound);
app.use(errorHandler);


module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};