const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let customer_schema = new Schema({
  name: {
    type: String,
    required: "Name is required",
  },
  address: {
    type: String,
  },
  contact: { type: Number, index: true },
});

module.exports = mongoose.model("customer", customer_schema);
