// import bluebird and db client
const Promise = require('bluebird');
const client = require('./database/db.js');

const getCompany = (req, res) => {
  // get company info and send back to server
  const companyId = req.params.id;
  const stmt = `SELECT * FROM companies WHERE id = ${companyId};`

  client
    .query(stmt)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
};

const getAllCompanies = (cb) => {
  // get all companies and send data to server
  const stmt = `SELECT * FROM companies;`

  client
    .query(stmt)
    .then(data => cb(null, data))
    .catch(err => cb(err))
};

module.exports = {
  getCompany: getCompany,
  getAllCompanies: getAllCompanies
};