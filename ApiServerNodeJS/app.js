const express = require('express');
const app = express();
const fs = require('fs');
const followRouter = express.Router();

// app.delete("/api/follow/:id", function(request, response){
// 	// not work now
//   response.header("Access-Control-Allow-Origin", "*");
// 	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	let id = request.params["id"];
// 	let data = JSON.parse(fs.readFileSync("json/follow.json", "utf8"));
// 	data.filter(function(it){
// 		if(it.id == id) {
// 			it.follow = false;
// 		}
// 	});
// 	fs.writeFileSync("json/follow.json", JSON.stringify(data, "", 2));
// 	response.send(data);
// });

followRouter.post("/:id", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	let id = request.params["id"];
	//users && follow
	let data = JSON.parse(fs.readFileSync("json/follow.json", "utf8"));
	data.filter(function(it){
		if(it.id == id) {
			it.follow = true;
		}
	});
	fs.writeFileSync("json/follow.json", JSON.stringify(data, "", 2));
	//
	let data2 = JSON.parse(fs.readFileSync("json/users.json", "utf8"));
	data2.items.filter(function(it){
		if(it.id == id) {
			it.followed = true;
		}
	});
	fs.writeFileSync("json/users.json", JSON.stringify(data2, "", 2));
	// {true
  //   resultCode: 0
  //   messages: [],
  //   data: {}
	// }
	// {false
  //   resultCode: 1 // !0
  //   messages: ['Something wrong'],
  //   data: {}
	// }
	response.send("data");
});

followRouter.get("/:id", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	let id = request.params["id"];
	let arr = JSON.parse(fs.readFileSync("json/follow.json", "utf8"));
	let filtered = arr.filter(function(item){
		if(item.id == id) return item;
  });
	filtered = filtered[0].follow;
	response.send(filtered);
});

app.use("/api/follow", followRouter);

app.get("/api/users", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	let page = request.query.page ? request.query.page : 1;
	let count = request.query.count ? request.query.count : 2;
	let data = JSON.parse(fs.readFileSync("json/users.json", "utf8"));
	let res = data;
	let arr = [];
	for (let i = (page-1)*count; i < (page*count) && i < data.items.length; i++) {
		arr.push(data.items[i]);
	}
	res.items = arr;
	response.send(res);
});

app.get("/api/profile/:id", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	let id = request.params["id"] ? request.params["id"] : 1200;
	let arr = JSON.parse(fs.readFileSync("json/profile.json", "utf8"));
	let filtered = arr.filter(function(item){
		if(item.userId == id) return item;
  });
	response.send(filtered[0]);
});

app.listen(3001, function() {
	console.log("Сервер Express");
	console.log("Прослушивание на порту 3001");
});
