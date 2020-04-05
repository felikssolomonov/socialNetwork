const User = require("../models/user");
const Profile = require("../models/profile");
const Follow = require("../models/follow");
const Dialog = require("../models/dialog");
const Message = require("../models/message");

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

exports.putUserStatus = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	let id = request.query.id ? request.query.id : 1;
	let status = request.query.status ? request.query.status : "status is empty!";
	User.updateOne({_id: +id},
        {status: status},
        function(err, result){
  					if(err) return console.log(err);
  					response.send(result);
        }
  	);
};

exports.getUserById = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	const id = request.params["id"] ? request.params["id"] : 1200;
	User.findById(+id, function(err, res){
				if(err) return console.log(err);
				response.send(res);
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

exports.post = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	const objUser = new Follow({
	    _id: +7000,
	    follow: false
	});
	objUser.save(function(err){
	    if(err) return console.log(err);
	    console.log("Сохранен объект", objUser);
	});
  response.send(objUser);
};

exports.getDialogs = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	const id = request.params["id"] ? request.params["id"] : 1200;
	Dialog.find({users: +id}, function(err, res){
				if(err) return console.log(err);
				console.log(res);
				response.send(res);
		});
};

exports.getMessages = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	const id = request.params["id"] ? request.params["id"] : 1200;
	Message.find({dialogId: +id}, function(err, res){
				if(err) return console.log(err);
				console.log(res);
				response.send(res);
		});
};
