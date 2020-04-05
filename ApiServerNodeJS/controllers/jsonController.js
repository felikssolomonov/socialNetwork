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
				response.render('pageUsers', {users: arr});
			}
		});
};

exports.getProfile = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	const id = request.params["id"] ? request.params["id"] : 1200;
	Profile.findById(+id, function(err, res){
				if(err) return console.log(err);
				response.render('pageProfile', {profile: res});
		});
};

exports.getFollow = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	let id = request.params["id"];
	Follow.findById(+id, function(err, res){
        if(err) return console.log(err);
        response.render('pageFollows', {id: res._id, follow: res.follow});
    });
};

exports.postFollow = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
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
  					response.render('pageFollows', {follow: result});
        }
  	);
};

exports.deleteFollow = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
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
						response.render('pageFollows', {follow: result.follow});
	      }
	  );
};

exports.create = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	response.render('create');
};

exports.postCreate = function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	const objUser = new User({
	    _id: request.body.id,
	    name: request.body.name,
	    status: request.body.status,
	    followed: request.body.followed
	});
	objUser.save(function(err){
	    if(err) return console.log(err);
	    console.log("Сохранен объект", objUser);
	});
	const objProfile = new Profile({
	    _id: request.body.id,
	    fullName: request.body.name
	});
	objProfile.save(function(err){
	    if(err) return console.log(err);
	    console.log("Сохранен объект", objProfile);
	});
  response.render('created',{userValue : objUser});
};
