const ProductService = require("../../lib/product");
const RespondError = require("../../helpers/responseError.helpers");
const productController = {
  add_product: async (req, res, next) => {
    let { name, rate, qty } = req.body;
    if (!name) {
      let error = new Error("Please enter name");
      error.status = 422;
      return RespondError.respondErr(error, req, res);
    }
    try {
      let saved_product = await ProductService.add_product(name, rate, qty);
      return res.status(200).json({
        message: "Product added successfully",
        product: saved_product,
      });
    } catch (error) {
      return next(error);
    }
  },

  update_product: async (req, res, next) => {
    let { name, rate, qty } = req.body;
    let { _id } = req.params;
    if (!name) {
      let error = new Error("Please enter name");
      error.status = 422;
      return RespondError.respondErr(error, req, res);
    }
    try {
      let updated_product = await ProductService.update_product(
        _id,
        name,
        rate,
        qty
      );
      return res.status(200).json({
        message: "Product updated successfully",
        product: updated_product,
      });
    } catch (error) {
      return next(error);
    }
  },

  delete_product: async (req, res, next) => {
    let { _id } = req.params;
    try {
      let product = await ProductService.get_product_by_id(_id);
      if (!product) {
        let error = new Error("No product found");
        error.status = 404;
        return next(error);
      }
    } catch (error) {
      return next(error);
    }
    try {
      await ProductService.delete_product_by_id(_id);
      return res.status(200).json({
        message: "Deleted Successfully",
        _id,
      });
    } catch (e) {
      return next(e);
    }
  },

  get_product_by_id: async (req, res, next) => {
    let _id = req.params._id;
    try {
      let product = await ProductService.get_product_by_id(_id);
      if (!product) {
        return res.status(200).json({
          message: "product not found",
        });
      }
      return res.status(200).json({
        message: "id matched",
        product,
      });
    } catch (error) {
      return next(error);
    }
  },

  get_all_products: async (req, res, next) => {
    try {
      let products = await ProductService.get_all_products();
      return res.status(200).json({
        message: "found products",
        products,
      });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  },
};

module.exports = productController;
