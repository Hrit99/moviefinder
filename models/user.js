const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
});

let User = mongoose.model('User', UserSchema);
module.exports = {User}