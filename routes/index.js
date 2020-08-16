var express = require("express");
var router = express.Router();

var customerRoutes = require("./customer/customer.routes");
var productRoutes = require("./product/product.routes");
var saleRoutes = require("./sale/sale.routes");

router.use("/customer", customerRoutes);
router.use("/product", productRoutes);
router.use("/sale", saleRoutes);
module.exports = router;
