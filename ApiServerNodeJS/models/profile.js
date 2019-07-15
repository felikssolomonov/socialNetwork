const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileScheme = new Schema({
  _id: {
    type: Number,
    required: true,
    minlength: 2,
    maxlength: 7,
    min: 10,
    max: 1000000
  },
  aboutMe: {
    type: String,
    default: "NO ABOUT ME"
  },
  contacts: {
    type: Map,
    of: String
  },
  lookingForAJob: Boolean,
  lookingForAJobDescription: String,
  fullName: String,
  photos: {
    type: Map,
    of: String
  }
}, {versionKey: false});

module.exports = mongoose.model("profile", profileScheme);
