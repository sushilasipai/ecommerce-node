const add_product = (Product) => (name, rate = 0, qty = 0) => {
  const product = new Product({
    name: name,
    rate: rate,
    qty: qty,
  });
  return product.save();
};

const update_product = (Product) => (_id, name, rate = 0, qty = 0) => {
  return Product.findOneAndUpdate(
    { _id: _id },
    {
      name: name,
      rate: rate,
      qty: qty,
    },

    { useFindAndModify: false }
  );
};

const get_product_by_id = (Product) => (_id) => {
  return Product.findOne({ _id: _id });
};

const get_all_products = (Product) => () => {
  return Product.find({});
};

const delete_product_by_id = (Product) => (_id) => {
  return Product.findByIdAndDelete(_id);
};

module.exports = (Product) => {
  return {
    add_product: add_product(Product),
    update_product: update_product(Product),
    delete_product_by_id: delete_product_by_id(Product),
    get_product_by_id: get_product_by_id(Product),
    get_all_products: get_all_products(Product),
  };
};
