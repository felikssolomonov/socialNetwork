const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
	return new Promise((resolve, reject) => {
		mongoose.Promise = global.Promise;
		mongoose.set('debug', true);
		mongoose.connection
		.on('error', error => reject(error))
		.on('close', () => console.log("dataBase connection closed!"))
		.once('open', () => resolve(mongoose.connection));
		mongoose.connect(config.Mongo.url+config.Mongo.dataBase,{useNewUrlParser: true});
	});
};
