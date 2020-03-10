const express = require('express');
const companyController = express.Router();
const Promise = require('bluebird');
const companyModel = require('../models/companyModel.js');
// const companyModel = Promise.promisifyAll(require('../models/companyModel.js'));

// companyController.get('/', (req, res) => {
//   companyModel.getAllCompanies()
//     .then((results) => res.status(200).send(results))
//     .catch((err) => res.status(404).send(err))
// });

companyController.get('/', (req, res) => {
  companyModel.getAllCompanies((err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.status(200).send(data);
    };
  });
});



module.exports = companyController;