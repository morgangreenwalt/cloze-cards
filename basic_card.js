var fs = require('fs');

function BasicCard(front, back){
	this.front = front;
	this.back = back;
	this.showCardBasic = function(){
		console.log("You've successfully made a basic card!");
		console.log("Front of card: "+ this.front);
		console.log("Back of card: "+ this.back);
		console.log("======================================");
	}
}

module.exports = BasicCard;