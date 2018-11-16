const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');


const UsersSchema = new mongoose.Schema({
  name:{ type: String, required: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true }
});

const User = mongoose.model('user', UsersSchema);
module.exports = User;