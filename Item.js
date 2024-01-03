const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  SKU: String,
  Name: String,
  // ...other fields
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
