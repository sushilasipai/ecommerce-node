const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let product_schema = new Schema({
  name: {
    type: String,
    required: "Name is required",
  },
  rate: {
    type: Number,
    index: true,
  },
  qty: { type: Number, index: true },
});

module.exports = mongoose.model("product", product_schema);
