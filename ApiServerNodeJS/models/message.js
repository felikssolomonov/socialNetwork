const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageScheme = new Schema({
  _id: {
    type: Number,
    required: true
  },
  dialogId: {
    type: Number,
    required: true
  },
  senderId: {
    type: Number,
    required: true
  },
  date: {
    type : Date,
    default: Date.now,
    required: true
  },
  date: {
    type : String,
    required: true
  }
}, {versionKey: false});

module.exports = mongoose.model("message", messageScheme);
