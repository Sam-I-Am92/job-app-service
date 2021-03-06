// import express app and listen for it here
const app = require('./index.js');
// import db connection
const client = require('./models/database/db.js');
// import env variables
require('dotenv').config();

client
  .connect()
  .then(() => {
    console.log(`Connected to ${process.env.DB_NAME} db!`);
  })
  .catch((err) => {
    console.log('Could not connect to DB: ', err);
  });

// listen to app
app.listen(process.env.PORT, () => {
  console.log(`Express server listening on port ${process.env.PORT}!`);
});