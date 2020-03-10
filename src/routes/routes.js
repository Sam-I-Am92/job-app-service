const express = require('express');
const router = express.Router();

// status function sends back time stamp on get request
// var timeLog = (req, res) => {
//   var time = `Time: ${Date.now()}`;
//   res.status(200).json(time);
// };

router.get('/', async (req, res) => {
  res.status(200).json('Hello World!');
});

router.get('/test', async (req, res) => {
  res.json({message: 'Pass!'});
});

module.exports = router;