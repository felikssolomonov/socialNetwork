const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScheme = new Schema({
  _id: Number,
  name: String,
  uniqueUrlName: String,
  photos: {
    type: Map,
    of: String
  },
  status: String,
  followed: Boolean
}, {versionKey: false});

module.exports = mongoose.model("user", userScheme);
