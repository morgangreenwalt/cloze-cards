var ClozeCard = require('./cloze_card');
var BasicCard = require('./basic_card');
var inquirer = require('inquirer');
var fs = require('fs');

function start(){
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
		    name: "textFullProperty",
		    type: "input",
		    message: "What is your full question?",
		    when: function(answers) {
	            return answers.playMessage === "Cloze-Deleted"
	        }
	  	},
	  		{
		    name: "clozeProperty",
		    type: "input",
		    message: "What should be hidden from your question?'",
		    when: function(answers) {
	            return answers.textFullProperty
	        }
	  	}

	]).then(function(answers){
		if (answers.playMessage === "Basic") {
			var newBasicCard = new BasicCard(answers.frontCardBasic, answers.backCardBasic);
			newBasicCard.showCardBasic();
		}

		else if (answers.playMessage === "Cloze-Deleted") {
			var newClozeCard = new ClozeCard(answers.textFullProperty, answers.clozeProperty);
			newClozeCard.showCardCloze();
		}
		playAgain();
	});
}

start();

function playAgain(){
	inquirer.prompt([
		{
			name: "playAgain",
			type: "list",
		    message: "Do you want to make another card?",
		    choices: ["Yes", "No"]
		}
	]).then(function(answers){
		if (answers.playAgain === "Yes") {
			start();
		}

		else {
			console.log("Thanks for playing! See you next time.");
		}
	});
}