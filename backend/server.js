/** Start server for jobly. */

var http = require("http");

// setInterval(function() {
//     http.get(`http://jobly-app-backend.herokuapp.com`);
// }, 300000); // every 5 minutes (300000)

const app = require('./app');
const { PORT } = require("./config");


app.listen(PORT, function () {
  console.log(`Server starting on port ${PORT}!`);
});
