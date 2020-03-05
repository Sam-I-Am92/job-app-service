// import express app and listen for it here
const app = require('./index.js');
// import env variables
require('dotenv').config();
// set variable to port env variable
const PORT = process.env.PORT || 3000;

// listen to app
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`);
});