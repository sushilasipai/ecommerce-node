const SaleService = require("../../lib/sale");
const RespondError = require("../../helpers/responseError.helpers");

const saleController = {
  //add new sale
  add_sale: async (req, res, next) => {
    let {
      cust_name,
      cust_contact,
      product,
      rate,
      qty,
      total,
      invoice_gen_flg,
    } = req.body;
    if (!product) {
      let error = new Error("Please enter product");
      error.status = 422;
      return RespondError.respondErr(error, req, res);
    }
    try {
      let saved_sale = await SaleService.add_sale(
        cust_name,
        cust_contact,
        product,
        rate,
        qty,
        total,
        invoice_gen_flg
      );
      return res.status(200).json({
        message: "sale added successfully",
        sale: saved_sale,
      });
    } catch (error) {
      return next(error);
    }
  },

  //update sale
  update_sale: async (req, res, next) => {
    let {
      cust_name,
      cust_contact,
      product,
      rate,
      qty,
      total,
      invoice_gen_flg,
    } = req.body;
    let { _id } = req.params;
    if (!product) {
      let error = new Error("Please enter product");
      error.status = 422;
      return RespondError.respondErr(error, req, res);
    }
    try {
      let updated_sale = await SaleService.update_sale(
        _id,
        cust_name,
        cust_contact,
        product,
        rate,
        qty,
        total,
        invoice_gen_flg
      );
      return res.status(200).json({
        message: "sale updated successfully",
        sale: updated_sale,
      });
    } catch (error) {
      return next(error);
    }
  },

  //delete sale
  delete_sale: async (req, res, next) => {
    let { _id } = req.params;
    try {
      let sale = await SaleService.get_sale_by_id(_id);
      if (!sale) {
        let error = new Error("No sale found");
        error.status = 404;
        return next(error);
      }
    } catch (error) {
      return next(error);
    }
    try {
      await SaleService.delete_sale_by_id(_id);
      return res.status(200).json({
        message: "Deleted Successfully",
        _id,
      });
    } catch (e) {
      return next(e);
    }
  },

  //get sale by sale id
  get_sale_by_id: async (req, res, next) => {
    let _id = req.params._id;
    try {
      let sale = await SaleService.get_sale_by_id(_id);
      if (!sale) {
        return res.status(200).json({
          message: "sale not found",
        });
      }
      return res.status(200).json({
        message: "id matched",
        sale,
      });
    } catch (error) {
      return next(error);
    }
  },

  //get all sales
  get_all_sales: async (req, res, next) => {
    try {
      let sales = await SaleService.get_all_sales();
      return res.status(200).json({
        message: "found sales",
        sales,
      });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  },

  //get invoice pending sales
  get_invoice_pending_sales: async (req, res, next) => {
    try {
      let sales = await SaleService.get_invoice_pending_sales();
      return res.status(200).json({
        message: "found sales",
        sales,
      });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  },
};

module.exports = saleController;
