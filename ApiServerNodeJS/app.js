const express = require('express');
const app = express();
const followRouter = express.Router();
//
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, {useNewUrlParser: true});
const dbAPI = "apiSN";
const tableFollow = "follow";
const tableProfile = "profile";
const tableUsers = "users";
let listener;
let dbClient;

mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbClient = client;
		app.locals.data = client.db(dbAPI);
});

process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});

app.get("/api/users", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	let page = request.query.page ? request.query.page : 1;
	let count = request.query.count ? request.query.count : 5;
	const collection = request.app.locals.data.collection(tableUsers);
	//-1 по убыванию 1 по возрастанию
	collection.find({}).sort({_id:-1}).toArray(function(err, users){
			if(err) return console.log(err);
      else {
				let arr = [];
				for (let i = (page-1)*count; i < (page*count) && i < users.length; i++) {
					arr.push(users[i]);
				}
				// console.log(users.length);
				response.send({items: arr, totalCount: users.length});
			}
    });
});

app.get("/api/profile/:id", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	const id = request.params["id"] ? request.params["id"] : 1200;
	const collection = request.app.locals.data.collection(tableProfile);
	collection.findOne({_id: +id}, function(err, user){
        if(err) return console.log(err);
        response.send(user);
    });
});

app.use("/api/follow", followRouter);

followRouter.get("/:id", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	let id = request.params["id"];
	const collection = request.app.locals.data.collection(tableFollow);
	collection.findOne({_id: +id}, function(err, user){
        if(err) return console.log(err);
        response.send(user.follow);
    });
});

followRouter.post("/:id", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
  console.log("post");
	let id = request.params["id"];
	let collection = request.app.locals.data.collection(tableFollow);
	collection.updateOne({_id: +id}, // критерий выборки
	      {$set: {follow: true}}, // параметр обновления
	      function(err, result){
						if(err) return console.log(err);
						// response.send(result);
	      }
	  );
  collection = request.app.locals.data.collection(tableUsers);
  collection.updateOne({_id: +id}, // критерий выборки
        {$set: {followed: true}}, // параметр обновления
        function(err, result){
  					if(err) return console.log(err);
  					response.send(result);
        }
  	);
});

followRouter.delete("/:id", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  console.log("delete");
	let id = request.params["id"];
	let collection = request.app.locals.data.collection(tableFollow);
	collection.updateOne({_id: +id}, // критерий выборки
	      {$set: {follow: false}}, // параметр обновления
	      function(err, result){
						if(err) return console.log(err);
						// response.send(result);
	      }
	  );
  collection = request.app.locals.data.collection(tableUsers);
	collection.updateOne({_id: +id}, // критерий выборки
	      {$set: {followed: false}}, // параметр обновления
	      function(err, result){
						if(err) return console.log(err);
						response.send(result);
	      }
	  );
});

listener = app.listen(3001, function() {
	console.log("Сервер Express");
	console.log("Прослушивание на порту 3001");
});
