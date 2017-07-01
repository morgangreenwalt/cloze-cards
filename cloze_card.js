var fs = require('fs');

function ClozeCard(fullText, cloze, partial){
	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = this.fullText.replace(cloze, "_____");
	this.errorFunc = function(){
			console.log("Something went wrong!")
	}
	this.showCardCloze = function(){
		console.log("You've successfully made a cloze card!");
		console.log("Partial text: "+ this.partial)
		console.log("Cloze (hidden) text: "+ this.cloze);
		console.log("Full text: "+ this.fullText);
		console.log("======================================");
	}
}

module.exports = ClozeCard;