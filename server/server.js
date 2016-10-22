var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var port = 3737;
var config = require('./server_config');
// TODO server front end files with static

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// TODO Initialize Session
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

app.post("/api/:screenname", function(req, res){
  // TODO Save screenname to session
  req.session.screenname = req.params.screenname;
})

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listeing on port ", port, " All your base belong to us!");
});
