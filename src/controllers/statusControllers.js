const express = require('express');
const router = express.Router();

// status function sends back time stamp on get request
// var timeLog = (req, res) => {
//   var time = `Time: ${Date.now()}`;
//   res.status(200).json(time);
// };

router.get('/', (req, res) => {
  res.status(200).json('Hello World!');
});

router.get('/test', (req, res) => {
  res.json({message: 'Pass!'});
});

router.get('/test/:id', (req, res) => {
  console.log('ID: ', req.params.id);
  res.json({message: req.params.id});
});

module.exports = router;