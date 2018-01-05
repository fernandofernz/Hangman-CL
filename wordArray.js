//word Array
var wordArray = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", 
"John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "Barack Hussein Obama",
 "George Walker Bush", "William Jefferson Clinton"];
var reArrange = Math.floor(Math.random() * wordArray.length);
var randomArray= wordArray[reArrange];
exports.randomArray = randomArray;