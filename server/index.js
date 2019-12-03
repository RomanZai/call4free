const express = require('express');
const mysql = require('mysql');
const morgan = require("morgan");
const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const PORT = process.env.PORT || 3002;

let connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{

connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'prices_db'
});
};

connection.connect();
module.exports = connection;

//Twilio voice

const {urlencoded} = require('body-parser');
const twilio = require('twilio');
const ClientCapability = twilio.jwt.ClientCapability;
const VoiceResponse = twilio.twiml.VoiceResponse;

let app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
app.use(urlencoded({extended: false}));

// Generate a Twilio Client capability token
app.get('/token', (request, response) => {
  const capability = new ClientCapability({
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
  });

  capability.addScope(
    new ClientCapability.OutgoingClientScope({
      applicationSid: process.env.TWILIO_TWIML_APP_SID})
  );

  const token = capability.toJwt();

  // Include token in a JSON response
  response.send({
    token: token,
  });
});

// Create TwiML for outbound calls
app.post('/voice', (request, response) => {
  let voiceResponse = new VoiceResponse();
  voiceResponse.dial({
    callerId: process.env.TWILIO_NUMBER,
  }, request.body.number);
  response.type('text/xml');
  response.send(voiceResponse.toString());
});

// Creating a GET route that returns data from the 'prices_op' table.
app.get('/code', function (req, res) {
    // Connecting to the database.

    // Executing the MySQL query (select all data from the 'code' table).
    connection.query('SELECT * FROM prices_op', function (error, results) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
});
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


app.listen(PORT, () => {
    console.log('http://localhost:3002/code');
   });