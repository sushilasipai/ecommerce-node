const mongoose = require("mongoose");

const mongoDBURL = "mongodb://localhost:27017/ecommercedb";

mongoose.Promise = Promise;

let connect = () => {
  return mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = { connect };
