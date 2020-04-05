const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dialogScheme = new Schema({
  _id: {
    type: Number,
    required: true
  },
  users: {
    type: Array,
		minItems: 2,
	  maxItems: 2,
		items: {
			type: Number
		},
		required: true
  }
}, {versionKey: false});

module.exports = mongoose.model("dialog", dialogScheme);
