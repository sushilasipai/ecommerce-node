const express = require("express");
const app = express();
const routes = require("./routes");
var bodyParser = require("body-parser");
var cors = require("cors");

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//Define v1 Routes
app.use("/api/v1", routes);

app.use((req, res, next) => {
  let err = new Error();
  err.status = 404;
  err.message = "not found";
  next(err);
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    message: err.message || "There was some error",
  });
});

module.exports = app;
