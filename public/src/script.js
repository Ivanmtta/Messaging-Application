function sendPressed(){
	var textMessage = document.getElementById("message");
	var userName = document.getElementById("user");
	if(textMessage.value == "" || userName.value == ""){
		return;
	}
	showMessage(userName.value + ": " + textMessage.value);
	textMessage.value = "";
}

function showMessage(msg){
	var newMsg = document.createElement("li");
	var msgText = document.createTextNode(msg);
	newMsg.setAttribute("id", "fromclient");
	newMsg.appendChild(msgText);
	var msgList = document.getElementById("messagelist");
	msgList.appendChild(newMsg);
}