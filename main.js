var ClozeCard = require('./cloze_card');
var BasicCard = require('./basic_card');
var inquirer = require('inquirer');
var fs = require('fs');

inquirer.prompt([
	{
		type: "list",
	    message: "Play Basic of Cloze-Deleted Flash Cards",
	    choices: ["Basic", "Cloze-Deleted"],
	    name: "playMessage"
	},
	{
	    type: "input",
	    message: "Add your question for the front of your card",
	    name: "frontCard"
  	},
  	{
	    type: "input",
	    message: "Add your answer for the back of your card",
	    name: "backCard"
  	}

]).then(function(user){
	if (user.choices === "Basic") {
		var newBasicCard = new BasicCard("Who was the first president of the USA?", "George Washington");
		newBasicCard.printCards();
	}

	else if (user.choices === "Cloze-Deleted") {
		var newClozeCard = new ClozeCard("George Washington was the first president of the USA.", "George Washington");
		newClozeCard.text();
		// console.log(firstCard1Cloze.cloze);
	}
	console.log(JSON.stringify(user, null, 2));
});