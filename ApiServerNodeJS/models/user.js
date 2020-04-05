const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScheme = new Schema({
  _id: Number,
  name: String,
  uniqueUrlName: {
    type: String,
    default: ""
  },
  date: {
    type : Date,
    default: Date.now,
    required: true
  },
  photos: {
    type: Map,
    of: String,
    default: {
      small: "",
      large: ""
    }
  },
  status: String,
  followed: {
    type: Boolean,
    default: false
  }
}, {versionKey: false});

module.exports = mongoose.model("user", userScheme);
