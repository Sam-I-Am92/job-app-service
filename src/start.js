// import express app and listen for it here
const app = require('./index.js');
// import db connection
const client = require('./models/db.js');
// import env variables
require('dotenv').config();
// set variable to port env variable
const PORT = process.env.PORT

// client.connect((err) => {
//   if (err) {
//     return console.log('Could not connect to db: ', err);
//   } else {
//     console.log('Connected to db!');
//   }
// });

client.connect()
  .then(() => {
    console.log('CONNECTED TO DB!');
  })
  .catch((err) => {
    console.log('Could not connect to DB: ', err);
  });

// listen to app
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`);
});