var express = require("express");
var router = express.Router();
var CustomerController = require("../../controllers/customer/customer.controller");

router.get("/", CustomerController.get_all_customers);
router.get("/:_name", CustomerController.get_user_by_name);
router.post("/", CustomerController.add_customer);
router.post("/delete/:_name&:_contact", CustomerController.delete_customer);

module.exports = router;
