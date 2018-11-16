const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const CustomersSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true }
});

CustomersSchema.plugin(timestamp);
const Customer = mongoose.model('customer', CustomersSchema);
module.exports = Customer;