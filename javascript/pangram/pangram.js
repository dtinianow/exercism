var Pangram = function(text){
  this.text = text;
}

Pangram.prototype.isPangram = function(){
  var alphabet = {'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0}
      text = this.text.toLowerCase().split('')

  for (var i in text) {
    var letter = text[i];
    if (letter in alphabet) { alphabet[letter] = 1 }
  }

  var total = Object.keys(alphabet).reduce(function(total, letter) {
    return total += alphabet[letter]
  }, 0)

  return total == 26;
}

//ALTERNATIVE SOLUTION:
//
// var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
// text = this.text.toLowerCase().split(''),
// lettersUsed = []
//
// for (var i in text) {
//   var letter = text[i];
//   if ((alphabet.indexOf(letter) > -1) && (lettersUsed.indexOf(letter) == -1)) {
//     lettersUsed.push(letter);
//   }
// }
// return lettersUsed.length == 26

module.exports = Pangram;
