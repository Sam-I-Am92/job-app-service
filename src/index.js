const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./routes/routes.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

// serve static files to browser

// status check
app.use('/status', router);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`);
});