const express = require('express');
const app = express();
const config = require('./config');
const dataBase = require("./dataBase");
const bodyParser = require("body-parser");

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

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/json/create", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
	response.render('create');
});

app.post("/json/create/profile", function(request, response){
	response.header("Access-Control-Allow-Origin", "*");
  var student = {
    first: request.body.fname,
    last: request.body.lname
  }
  response.render('created',{userValue : student});
});

const apiRouter = require("./routes/apiRouter.js");
const jsonRouter = require("./routes/jsonRouter.js");

app.use("/api", apiRouter);
app.use("/json", jsonRouter);

app.use(function (req, res, next) {
    res.status(404).render('404', {url: req.url});
});
