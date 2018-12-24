var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(process.env.PORT || 8000);
app.use(express.static("public"));

console.log("Server Running");

var io = socket(server);
io.sockets.on("connection", newConnection);

function newConnection(socket){
	console.log("New Connection: " + socket.id);

	socket.on("sendFromClient", (msg)=>{
		//io.sockets.emit("sendFromServer", msg);
		socket.broadcast.emit("sendFromServer", msg);
	});
}