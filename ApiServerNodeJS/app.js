const express = require('express');
const app = express();
const followRouter = express.Router();
const config = require('./config');
const dataBase = require("./dataBase");
const Follow = require("./models/follow");
const User = require("./models/user");
const Profile = require("./models/profile");

const listener = () => {
  app.listen(config.PORT, function() {
    console.log("Сервер Express");
    console.log("Прослушивание на порту "+config.PORT);
  })
};

dataBase()
  .then(info => {
    console.log("dataBase "+info.name+" started on "+info.host
                +":"+info.port);
    listener();
  })
  .catch(() => {
    console.error("can't connect to dataBase!");
    process.exit(1);
});

app.get("/api/users", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	let page = request.query.page ? request.query.page : 1;
	let count = request.query.count ? request.query.count : 5;
	//-1 по убыванию 1 по возрастанию
	User.find({}).sort({_id:-1}).exec(function(err, res){
			if(err) return console.log(err);
      else {
				let arr = [];
				for (let i = (page-1)*count; i < (page*count) && i < res.length; i++) {
					arr.push(res[i]);
				}
				response.send({items: arr, totalCount: res.length});
			}
    });
});

app.get("/api/profile/:id", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	const id = request.params["id"] ? request.params["id"] : 1200;
  Profile.findById(+id, function(err, res){
        if(err) return console.log(err);
        response.send(res);
    });
});

app.use("/api/follow", followRouter);

followRouter.get("/:id", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	let id = request.params["id"];
	Follow.findById(+id, function(err, res){
        if(err) return console.log(err);
        response.send(res.follow);
    });
});

followRouter.post("/:id", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
  console.log("post");
	let id = request.params["id"];
	Follow.updateOne({_id: +id}, // критерий выборки
	      {follow: true}, // параметр обновления
	      function(err, result){
						if(err) return console.log(err);
						// response.send(result);
	      }
	  );
  User.updateOne({_id: +id},
        {followed: true},
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
	Follow.updateOne({_id: +id},
	      {follow: false},
	      function(err, result){
						if(err) return console.log(err);
						// response.send(result);
	      }
	  );
  User.updateOne({_id: +id},
	      {followed: false},
	      function(err, result){
						if(err) return console.log(err);
						response.send(result);
	      }
	  );
});
