const express = require('express');
const offerController = express.Router();
const Promise = require('bluebird');
const client = require('../models/database/db.js');
// const offerModel = require('../models/offerModel.js');

// offerController.get('/', (req, res) => {
//   offerModel.getAllOffers((err, data) => {
//     if (err) {
//       console.log(err.stack);
//     } else {
//       res.status(200).send(data);
//     };
//   });
// });

// OFFERS GET REQUESTS

// get all offers
offerController.get('/', (req, res) => {
  // query db for all offers
  const stmt = `SELECT * FROM offers;`

  client
    .query(stmt)
    .then((result) => {
      console.log('OFFERS DATA: ', result.rows);
      res.status(200).send(result.rows)
    })
    .catch((err) => {
      console.log(err.stack);
      res.status(404).send(err);
    })
});

// get specific offer based on passed in id
offerController.get('/:id', (req, res) => {
  // set id var
  const id = req.params.id;

  // query db for specific offer
  const stmt = `SELECT * FROM offers WHERE id = ${id};`

  client
    .query(stmt)
    .then((result) => {
      console.log('OFFERS DATA: ', result.rows);
      res.status(200).send(result.rows);
    })
    .catch((err) => {
      console.log(err.stack);
      res.status(404).send(err);
    })
});

module.exports = offerController;