var Isogram = function(word) {
  this.word = word;
};

Isogram.prototype.isIsogram = function() {
  var letterTracker = {};
  var letters = this.word.toLowerCase().split('');

  for (var i = 0; i < letters.length; i++) {
    if (letterTracker[letters[i]] === 1) { return false }
    if (letters[i].match(/[a-zá-ÿ]/i)) { letterTracker[letters[i]] = 1 };
  };
  return true;
};

module.exports = Isogram;
