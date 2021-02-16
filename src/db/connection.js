const mysql = require("mysql2");
require("dotenv").config();
const { promisify } = require("util");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
});

console.log(`Successfully connected to ${process.env.DB_NAME} on MySQL Server`);

exports.promisifiedQuery = promisify(connection.query).bind(connection);
