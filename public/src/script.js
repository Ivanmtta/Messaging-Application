var socket;

window.onload = function(){
	socket = io.connect(window.location.host);
}

function sendPressed(){
	var textMessage = document.getElementById("message");
	var userName = document.getElementById("user");
	if(textMessage.value == "" || userName.value == ""){
		return;
	}
	createMessage(userName.value + ": " + textMessage.value, "fromclient");
	textMessage.value = "";
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