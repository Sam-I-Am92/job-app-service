// import bluebird and db client
const Promise = require('bluebird');
const client = require('./database/db.js');

const getOffer = (req, res) => {
  // get offer info by id and send back to server
  const offerId = req.params.id;
  const stmt = `SELECT * FROM offers WHERE id = ${offerId};`

  client
    .query(stmt)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
};

const getAllOffers = (cb) => {
  // get all offers and send to server
  const stmt = `SELECT * FROM offers;`

  client
    .query(stmt)
    .then(data => cb(null, data))
    .catch(err => cb(err))
};

module.exports = {
  getOffer: getOffer,
  getAllOffers: getAllOffers
};