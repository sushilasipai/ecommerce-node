const CustomerService = require("../../lib/customer");
const RespondError = require("../../helpers/responseError.helpers");
const customerController = {
  add_customer: async (req, res, next) => {
    let { name, address, contact } = req.body;
    if (!name) {
      let error = new Error("Please enter name");
      error.status = 422;
      return RespondError.respondErr(error, req, res);
    }
    try {
      let saved_customer = await CustomerService.add_customer(
        name,
        address,
        contact
      );
      return res.status(200).json({
        message: "Customer added successfully",
        customer: saved_customer,
      });
    } catch (error) {
      return next(error);
    }
  },

  update_customer: async (req, res, next) => {
    let { name, address, contact } = req.body;
    let { _id } = req.params;
    if (!name) {
      let error = new Error("Please enter name");
      error.status = 422;
      return RespondError.respondErr(error, req, res);
    }
    try {
      let updated_customer = await CustomerService.update_customer(
        _id,
        name,
        address,
        contact
      );
      return res.status(200).json({
        message: "Customer updated successfully",
        customer: updated_customer,
      });
    } catch (error) {
      return next(error);
    }
  },

  delete_customer: async (req, res, next) => {
    let { _id } = req.params;
    try {
      let customer = await CustomerService.get_customer_by_id(_id);
      if (!customer) {
        let error = new Error("No customer found");
        error.status = 404;
        return next(error);
      }
    } catch (error) {
      return next(error);
    }
    try {
      await CustomerService.delete_customer_by_id(_id);
      return res.status(200).json({
        message: "Deleted Successfully",
        _id,
      });
    } catch (e) {
      return next(e);
    }
  },

  get_customer_by_id: async (req, res, next) => {
    let _id = req.params._id;
    try {
      let customer = await CustomerService.get_customer_by_id(_id);
      if (!customer) {
        return res.status(200).json({
          message: "customer not found",
        });
      }
      return res.status(200).json({
        message: "id matched",
        customer,
      });
    } catch (error) {
      return next(error);
    }
  },
  get_customer_by_name: async (req, res, next) => {
    let name = req.params.name;
    try {
      let customers = await CustomerService.get_customer_by_name(name);

      return res.status(200).json({
        message: "name matched",
        customers,
      });
    } catch (error) {
      return next(error);
    }
  },

  get_all_customers: async (req, res, next) => {
    try {
      let customers = await CustomerService.get_all_customers();
      return res.status(200).json({
        message: "found customers",
        customers,
      });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  },
};

module.exports = customerController;
