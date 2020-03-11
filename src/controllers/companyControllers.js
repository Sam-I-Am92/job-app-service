const express = require('express');
const companyController = express.Router();
const Promise = require('bluebird');
// const companyModel = require('../models/companyModel.js');
const client = require('../models/database/db.js');
// const companyModel = Promise.promisifyAll(require('../models/companyModel.js'));

// companyController.get('/', (req, res) => {
//   companyModel.getAllCompanies()
//     .then((results) => res.status(200).send(results))
//     .catch((err) => res.status(404).send(err))
// });

// companyController.get('/', (req, res) => {
//   companyModel.getAllCompanies((err, data) => {
//     if (err) {
//       console.log(err.stack);
//     } else {
//       res.status(200).send(data);
//     };
//   });
// });

// companyController.get('/:id', (req, res) => {
//   companyModel.getCompany({userID: req.params.id}, (err, data) => {
//     if (err) {
//       console.log("**err**ERROR: " + err);
//       console.log("**err**DATA: " + data);
//       res.status(404).send(err);
//     } else {
//       console.log("**data**ERROR: " + err);
//       console.log("**data**DATA: " + data);
//       res.status(200).send(data);
//     };
//   });
// });

// COMPANY GET REQUESTS

// get all companies from db
companyController.get('/', (req, res) => {
  // query the db for all records regarding companies
  const stmt = `SELECT * FROM companies;`

  client.query(stmt, (err, data) => {
    if (err) {
      console.log(err.stack);
      res.status(404).send(err);
    } else {
      console.log('Company DATA: ', data);
      res.status(200).send(data);
    }
  });
});

// get 1 company based on id
companyController.get('/:id', (req, res) => {
  // var for passed in id
  const id = req.params.id;

  // query the db for specific company record
  const stmt = `SELECT * FROM companies WHERE id = ${id};`

  client
    .query(stmt)
    .then((result) => {
      console.log('COMPANY DATA: ', result.rows);
      res.status(200).send(result.rows);
    })
    .catch((err) => {
      console.log(err.stack);
    })
});

// COMPANY POST REQUESTS

// COMPANY UPDATE REQUESTS

// COMPANY DELETE REQUESTS



module.exports = companyController;