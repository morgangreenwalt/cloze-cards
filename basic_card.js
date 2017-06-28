

function BasicCard(front, back){
	this.front = front;
	this.back = back;
	this.printFront = function(){
		console.log(front);
	}
	this.printBack = function(){
		console.log(front);
	}
	this.printBasicCards = function(){
		console.log(front);
		console.log(back);
	}
}

// var newBasicCard = new BasicCard("Who was the first president of the USA?", "George Washington");

// var newBasicCard2 = new BasicCard("Who was the second president of the USA?", "Abe Lincoln");

module.exports = BasicCard;



