const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followScheme = new Schema({
    _id: Number,
    date: {
      type : Date,
      default: Date.now,
      required: true
    },
    follow: {
			type: Boolean,
			required: true
		}
}, {versionKey: false});

module.exports = mongoose.model("follow", followScheme);
