
//Check the letters guessed versus the random word selected
var letterVar = require("./letter.js");

function word(value){
	this.value = value;
	this.letters = [];
	this.guessesMade = "";
	for(var i = 0; i < this.value.length; i++) {
		this.letters.push(new letterVar.letter(this.value[i]));
	}
};
//prototype gameOverfor word function
word.prototype.gameOver = function(){
	for(var i = 0; i < this.letters.length; i++){
        if(!this.letters[i].show) 
        return false;
	}
	return true;
}
//prototype used letter for word function
word.prototype.usedLetter = function(letter){
	var lowerLetter = letter.toLowerCase();
	if (this.guessesMade.indexOf(lowerLetter) != -1) {
		return "duplicate";
	} 
    this.guessesMade += lowerLetter;
    
	for(var i=0; i<this.letters.length;i++){
		if(this.letters[i].value.toLowerCase() == lowerLetter){
		this.letters[i].show = true;
		}
	}
};

word.prototype.toString = function(){
  var output = "";
  for(var i=0; i<this.letters.length; i++){
    output += this.letters[i].printInfo();
  }
  return output;
}

exports.wordCons = word;