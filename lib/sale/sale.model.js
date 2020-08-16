const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let sale_schema = new Schema({
  cust_name: {
    type: String,
  },
  cust_contact: {
    type: Number,
    index: true,
  },
  product: {
    type: String,
    required: "Product is required",
  },
  qty: { type: Number, index: true },
  rate: { type: Number, index: true },
  total: { type: Number, index: true },
  invoice_gen_flg: { type: Boolean },
});

module.exports = mongoose.model("sale", sale_schema);
