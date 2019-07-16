const User = require("../models/user");
const Profile = require("../models/profile");
const Follow = require("../models/follow");

exports.getUsers = function(request, response){
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
};

exports.getProfile = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	const id = request.params["id"] ? request.params["id"] : 1200;
	Profile.findById(+id, function(err, res){
				if(err) return console.log(err);
				response.send(res);
		});
};

exports.getFollow = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	let id = request.params["id"];
	Follow.findById(+id, function(err, res){
        if(err) return console.log(err);
        response.send(res.follow);
    });
};

exports.postFollow = function(request, response){
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
};

exports.deleteFollow = function(request, response){
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
};
