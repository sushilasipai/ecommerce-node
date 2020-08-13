var express = require("express");
var router = express.Router();

var customerRoutes = require("./customer/customer.routes");
var productRoutes = require("./product/product.routes");

router.use("/customer", customerRoutes);
router.use("/product", productRoutes);

module.exports = router;
