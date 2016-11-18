var Anagram = function(word) {
  this.word = word;
};

Anagram.prototype.matches = function(matches) {
  if (typeof matches === 'string') { matches = [matches] }
  return matches.filter(this.isAnagram.bind(this));
};

Anagram.prototype.isAnagram = function(match) {
  var formattedWord = this.formatWord(this.word);
  var comparison = this.formatWord(match);
  return formattedWord === comparison && this.word.toLowerCase() !== match.toLowerCase();
};

Anagram.prototype.formatWord = function(word) {
  return word.toLowerCase().split('').sort().join(' ')
};

module.exports = Anagram;
