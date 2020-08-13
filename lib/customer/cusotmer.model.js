const sql = require("sql");
let Schema = sql.Schema;

let customer_schema = new Schema({
  cust_id: {
    type: Number,
    index: true,
    unique: true,
  },
  name: {
    type: String,
    required: "Name is required",
  },
  address: {
    type: String,
  },
  contact: { type: Number, index: true },
});

module.exports = sql.model("customer", customer_schema);
