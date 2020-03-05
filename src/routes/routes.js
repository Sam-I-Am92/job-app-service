const express = require('express');
const router = express.Router();

// status function sends back time stamp on get request
var timeLog = (req, res) => {
  var time = `Time: ${Date.now()}`;
  res.status(200).send(time);
};

router.get('/', timeLog);

module.exports = router;