var express = require("express");
var router = express.Router();
var CustomerController = require("../../controllers/customer/customer.controllers");

router.get("/", CustomerController.get_all_customers);
router.get("/search/:name", CustomerController.get_customer_by_name);
router.get("/:_id", CustomerController.get_customer_by_id);
router.post("/", CustomerController.add_customer);
router.post("/update/:_id/", CustomerController.update_customer);
router.post("/delete/:_id", CustomerController.delete_customer);

module.exports = router;
