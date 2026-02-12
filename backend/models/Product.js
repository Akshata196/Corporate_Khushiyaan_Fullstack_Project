const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  category: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  image: {
  type: String,
  required: true
}

});

module.exports = mongoose.model('Product', productSchema);
