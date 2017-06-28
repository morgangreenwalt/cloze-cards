
function ClozeCard(text, cloze, partial, fullText){
	this.text = text;
	this.cloze = cloze;
	this.partial = partial;
	this.fullText = fullText;
	this.errorFunc = function(){
			console.log("Something went wrong!")
	}
}

// var newClozeCard = new ClozeCard("George Washington was the first president of the USA.", "George Washington");

module.exports = ClozeCard;