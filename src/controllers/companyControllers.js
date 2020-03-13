// comopanies callback functions
const client = require('../models/database/db.js');

exports.getAllCompanies = (req, res) => {
  // sql statement
  const stmt = `SELECT * FROM companies;`

  client
    .query(stmt)
    .then((result) => {
      console.log('COMPANY DATA: ', result.rows);
      res.status(200).send(result.rows);
    })
    .catch((err) => {
      console.log(err.stack);
      res.status(404).send(err);
    })
}

exports.getCompany = (req, res) => {
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
      res.status(404).send(err);
    })
}