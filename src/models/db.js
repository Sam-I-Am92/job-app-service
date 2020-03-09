// create db connection
// import pg
const pg = require('pg');

require('dotenv').config();

// create db client
const client = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});

// client.connect()
//   .then(() => {
//     console.log('CONNECTED TO DB!');
//   })
//   .catch((err) => {
//     console.log('Could not connect to DB: ', err);
//   });

// client.connect((err) => {
//   if (err) {
//     return console.log('Could not connect to db: ', err);
//   } else {
//     console.log('Connected to db!');
//   }
// });

  module.exports = client;