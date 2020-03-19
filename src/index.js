const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const companiesRouter = require('./routers/companiesRouter.js');
const offersRouter = require('./routers/offersRouter.js');
const statusRouter = require('./routers/statusRouter.js');
const usersRouter = require('./routers/usersRouter.js');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

// serve static files to browser

// status check
app.use('/status', statusRouter);

app.use('/companies', companiesRouter);

app.use('/offers', offersRouter);

app.use('/users', usersRouter);

module.exports = app;