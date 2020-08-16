var express = require("express");
var router = express.Router();
var ProductController = require("../../controllers/product/product.controllers");

router.get("/", ProductController.get_all_products);
router.get("/:_id", ProductController.get_product_by_id);
router.post("/", ProductController.add_product);
router.post("/update/:_id/", ProductController.update_product);
router.post("/delete/:_id", ProductController.delete_product);

module.exports = router;
