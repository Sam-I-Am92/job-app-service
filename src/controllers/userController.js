const client = require('../models/database/db.js');

exports.id = (req, res) => {
  console.log('userID: ', req.params.id);
  res.status(200).json(req.params.id);
}

exports.getAllUsers = (req, res) => {
  // db query
  let stmt = `SELECT * FROM users;`

  client
    .query(stmt)
    .then((result) => {
      console.log('USERS DATA: ', result.rows);
      res.status(200).send(result.rows);
    })
    .catch((err) => {
      console.log(err.stack);
      res.status(404).send(err);
    })
};

exports.getUser = (req, res) => {
  let id = req.params.id;
  let stmt = `SELECT * FROM users WHERE id = ${id};`

  client
    .query(stmt)
    .then((result) => {
      console.log('USER DATA: ', result.rows);
      res.status(200).send(result.rows);
    })
    .catch((err) => {
      console.log(err.stack);
      res.status(404).send(err);
    })
};