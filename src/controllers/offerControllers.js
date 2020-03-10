const express = require('express');
const offerController = express.Router();
const Promise = require('bluebird');
const offerModel = require('../models/offerModel.js');

offerController.get('/', (req, res) => {
  offerModel.getAllOffers((err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.status(200).send(data);
    };
  });
});

module.exports = offerController;