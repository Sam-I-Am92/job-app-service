const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./routes/routes.js');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

// serve static files to browser

// status check
app.use('/status', router);

module.exports = app;