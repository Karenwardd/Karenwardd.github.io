window.onload = function(){
	
var contentDiv = document.getElementById("content");

var newContent = document.createElement("h1");
	
	newContent.innerHTML = "this is content";
	
	contentDiv.appendChild(newContent);
	
	console.log(newContent);
	
	function turnTextBlue(){
	newContent.style.color = "blue";
	contentDiv.style.color = "blue";
	}
	
setTimeout(turnTextBlue,3000);
	
};