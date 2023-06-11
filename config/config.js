const mysql = require("mysql");

//Connect db
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("DATABASE CONNECTED");
});

module.exports = db;
