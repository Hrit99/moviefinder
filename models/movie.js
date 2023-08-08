const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    index: { unique: true }
  },
  link: {
    type: String,
    index: { unique: true }
  },
});

let Movie = mongoose.model('Movie', MovieSchema);
module.exports = {Movie}