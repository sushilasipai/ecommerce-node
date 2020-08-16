const add_sale = (Sale) => (
  cust_name = null,
  cust_contact = null,
  product,
  rate = 0,
  qty = 0,
  total = 0,
  invoice_gen_flg = false
) => {
  const sale = new Sale({
    cust_name: cust_name,
    cust_contact: cust_contact,
    product: product,
    rate: rate,
    qty: qty,
    total: total,
    invoice_gen_flg: invoice_gen_flg,
  });
  return sale.save();
};

const update_sale = (Sale) => (
  _id,
  cust_name = null,
  cust_contact = null,
  product,
  rate = 0,
  qty = 0,
  total = 0,
  invoice_gen_flg = false
) => {
  return Sale.findOneAndUpdate(
    { _id: _id },
    {
      cust_name: cust_name,
      cust_contact: cust_contact,
      product: product,
      rate: rate,
      qty: qty,
      total: total,
      invoice_gen_flg: invoice_gen_flg,
    },

    { useFindAndModify: false }
  );
};

const get_sale_by_id = (Sale) => (_id) => {
  return Sale.findOne({ _id: _id });
};

const get_invoice_pending_sales = (Sale) => () => {
  return Sale.find({ invoice_gen_flg: false });
};

const get_all_sales = (Sale) => () => {
  return Sale.find({});
};

const delete_sale_by_id = (Sale) => (_id) => {
  return Sale.findByIdAndDelete(_id);
};

module.exports = (Sale) => {
  return {
    add_sale: add_sale(Sale),
    update_sale: update_sale(Sale),
    get_sale_by_id: get_sale_by_id(Sale),
    get_all_sales: get_all_sales(Sale),
    get_invoice_pending_sales: get_invoice_pending_sales(Sale),
    delete_sale_by_id: delete_sale_by_id(Sale),
  };
};
