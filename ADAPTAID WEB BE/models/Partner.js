// models/Partner.js
const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  name: String,
  type: String,
  location: String,
  contact: String,
  website: String
});

module.exports = mongoose.model("Partner", partnerSchema);


