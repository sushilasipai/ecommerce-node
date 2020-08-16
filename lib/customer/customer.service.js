const add_customer = (Customer) => (name, address = null, contact = null) => {
  const customer = new Customer({
    name: name,
    address: address,
    contact: contact,
  });
  return customer.save();
};

const update_customer = (Customer) => (
  _id,
  name,
  address = null,
  contact = null
) => {
  return Customer.findOneAndUpdate(
    { _id: _id },
    {
      name: name,
      address: address,
      contact: contact,
    },

    { useFindAndModify: false }
  );
};

const get_customer_by_id = (Customer) => (_id) => {
  return Customer.findOne({ _id: _id });
};

const get_customer_by_name = (Customer) => (name) => {
  return Customer.find({ name: { $regex: name, $options: "i" } });
};

const get_all_customers = (Customer) => () => {
  return Customer.find({});
};

const delete_customer_by_id = (Customer) => (_id) => {
  return Customer.findByIdAndDelete(_id);
};

module.exports = (Customer) => {
  return {
    add_customer: add_customer(Customer),
    update_customer: update_customer(Customer),
    get_customer_by_id: get_customer_by_id(Customer),
    get_all_customers: get_all_customers(Customer),
    get_customer_by_name: get_customer_by_name(Customer),
    delete_customer_by_id: delete_customer_by_id(Customer),
  };
};
