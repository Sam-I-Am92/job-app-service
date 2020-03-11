// import bluebird and db client
const Promise = require('bluebird');
const client = require('./database/db.js');

const getCompany = (req, cb) => {
  // get company info and send back to server
  const companyId = req.userID;
  // console.log(req.userID);
  const stmt = `SELECT * FROM companies WHERE id = ${companyId};`
  // console.log("in getCompany: DATA:  " + data);
  client
    .query(stmt)
    .then(data => cb(null, data))
    .then(() => {
      console.log("in getCompany: DATA:  " + data);
    })
    .catch(err => cb(err))
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