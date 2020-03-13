const express = require('express');
// const statusController = express.Router();

// status function sends back time stamp on get request
// var timeLog = (req, res) => {
//   var time = `Time: ${Date.now()}`;
//   res.status(200).json(time);
// };

// statusController.get('/', (req, res) => {
//   res.status(200).json('Hello World!');
// });

// statusController.get('/test', (req, res) => {
//   res.json({message: 'Pass!'});
// });

// statusController.get('/test/:id', (req, res) => {
//   console.log('ID: ', req.params.id);
//   res.json({message: req.params.id});
// });

// module.exports = statusController;

exports.msg = (req, res) => {
  res.status(200).json('Hello World!');
};

exports.id = (req, res) => {
  console.log('ID: ', req.params.id);
  res.json({message: req.params.id});
};