module.exports = {
	PORT: 3001,
	Mongo: {
		url: "mongodb://localhost:27017/",
		dataBase: "apiSN",
		collections: {
			follow: "follow",
			profile: "profile",
			user: "user"
		}
	}
};
