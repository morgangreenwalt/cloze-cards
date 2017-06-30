var ClozeCard = require('./cloze_card');
var BasicCard = require('./basic_card');
var inquirer = require('inquirer');
var fs = require('fs');

inquirer.prompt([
	{
		name: "playMessage",
		type: "list",
	    message: "What do you want to play?",
	    choices: ["Basic", "Cloze-Deleted"]
	},

	{
	    name: "frontCardBasic",
	    type: "input",
	    message: "Add your question for the front of your card",
	    when: function(answers) {
            return answers.playMessage === "Basic"
        }
  	},

  	{
	    name: "backCardBasic",
	    type: "input",
	    message: "Add your answer for the back of your card",
	    when: function(answers) {
            return answers.frontCardBasic
        }
  	},
  	{
	    name: "frontCardCloze",
	    type: "input",
	    message: "Add your question for the front of your card",
	    when: function(answers) {
            return answers.playMessage === "Cloze-Deleted"
        }
  	},

  	{
	    name: "textProperty",
	    type: "input",
	    message: "Add the full answer to the question",
	    when: function(answers) {
            return answers.frontCardCloze
        }
  	},
  		{
	    name: "clozeProperty",
	    type: "input",
	    message: "Add only the text you'd like to be 'cloze-deleted'",
	    when: function(answers) {
            return answers.textProperty
        }
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