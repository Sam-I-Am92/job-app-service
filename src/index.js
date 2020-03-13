const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const status = require('./controllers/statusControllers.js');
const client = require('./models/database/db.js');
const companyController = require('./controllers/companyControllers.js');
const offerController = require('./controllers/offerControllers.js');
const statusRouter = require('./routers/statusRouter.js');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

// serve static files to browser

// status check
app.use('/status', statusRouter);

// app.use('/companies', companyController);

// app.use('/offers', offerController);

module.exports = app;