const express = require('express');
const mysql = require('mysql');
const morgan = require("morgan");
const path = require("path");
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

const app = express();

app.use(morgan("combined"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

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