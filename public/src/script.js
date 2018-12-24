var socket;

window.onload = function(){
	socket = io.connect(window.location.host);
	socket.on("sendFromServer", (msg)=>{
		createMessage(msg, "fromServer");
	});
}

function sendPressed(){
	var textMessage = document.getElementById("message");
	var userName = document.getElementById("user");
	if(textMessage.value == ""){
		return;
	}
	else if(userName.value == ""){
		alert("You must enter a username");
		return;
	}
	var msg = userName.value + ": " + textMessage.value;
	createMessage(msg, "fromclient");
	textMessage.value = "";
	socket.emit("sendFromClient", msg);
}

function createMessage(msg, user){
	var newMsg = document.createElement("li");
	var msgText = document.createTextNode(msg);
	newMsg.setAttribute("id", user);
	newMsg.appendChild(msgText);
	addMessage(newMsg);
}

function addMessage(newMsg){
	var msgList = document.getElementById("messagelist");
	msgList.appendChild(newMsg);
	scrollToBottom();
}

function scrollToBottom(){
	var messages = document.getElementById("messages");
	messages.scrollTop = messages.scrollHeight;
}