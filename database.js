const mysql = require("mysql");
const dbConfig = require("../database-config.js");

mysql.Promise = Promise;

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// open the MySQL connection
let connect = () => {
  return mysql.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = { connect };
