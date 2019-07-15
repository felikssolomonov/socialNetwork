const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followScheme = new Schema({
    _id: {
			type: Number
		},
    follow: {
			type: Boolean,
			required: true
		}
}, {versionKey: false});

module.exports = mongoose.model("follow", followScheme);
