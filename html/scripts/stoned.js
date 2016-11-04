var body = document.getElementsByTagName("body")[0];
var colors=["green","blue1","blue2","yellow","pink"];
var currentCollor;

var pickColor = function(){
	var randomNumber =   Math.floor(Math.random() * (4 - 0 + 1)) + 0;
	var color = colors[randomNumber];
	if(color != currentCollor){
	currentCollor = color;
	changeColor(color);
	}
	else{
		pickColor();
	}
}
var changeColor = function(color){
	var newColor = String(color);
	body.className= newColor;
}
body.addEventListener("transitionend", pickColor, false);
setTimeout(function() {
	pickColor();
}, 100);