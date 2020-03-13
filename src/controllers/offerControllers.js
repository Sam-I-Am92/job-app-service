// offers callback functions
const client = require('../models/database/db.js');


exports.getAllOffers = (req, res) => {
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
}

exports.getOffer = (req, res) => {
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
}