//function used for each letter in word
function letter(value) {
    //hide property
    this.show = false;
    this.value = value;
    if (this.value == ' ')
        //show property
        this.show = true;
}
//prototype for letter function
letter.prototype.printInfo = function () {
    if (this.show) {
        return this.value;
    }
    return " _ ";
}
//export function letter
exports.letter = letter;