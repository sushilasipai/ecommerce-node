var express = require("express");
var router = express.Router();
var SaleController = require("../../controllers/sale/sale.controllers");

router.get("/", SaleController.get_all_sales);
router.get("/invoice/", SaleController.get_invoice_pending_sales);
router.get("/:_id", SaleController.get_sale_by_id);
router.post("/", SaleController.add_sale);
router.post("/update/:_id/", SaleController.update_sale);
router.post("/delete/:_id", SaleController.delete_sale);

module.exports = router;
