var inquirer = require("inquirer");
var game = require("./wordArray.js");
var wordCons = require("./word.js");
var randomArray = game.randomArray;
var letter = require("./letter.js");
var letterGuessed;


var myWord = new wordCons.wordCons(game.randomArray);
var numberOfTries = 15;

function userGuess(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= numberOfTries){
		console.log('You have no more guesses. WOMP WOMP.');
	return; //Game over
	}
	inquirer.prompt([{
        type: 'text',
		name: 'letter',
		message: 'Please typer a letter to guess the US President: ',
		validate: function(str){
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(letterInput){ 
				var letter = letterInput.letter; 
				myWord.usedLetter(letter); 
					if(myWord.gameOver()){ 
					console.log('Correct! The answer is : ' + myWord.toString() + '!');
					return; 
					}
				console.log(' . . . . . . . . . . . . \n');
				console.log( + (numberOfTries - myWord.guessesMade.length) + ' guesses remaining')
				userGuess(); 
				}
  );
}

userGuess(); //Start Game
exports.letter;