var Words = function() {};

Words.prototype.count = function(words) {
  var wordCount = Object.create(null);
  var wordList = words.toLowerCase().trim().split(/\s+/);

  for (var i = 0; i < wordList.length; i++) {
    var word = wordList[i];
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
};

module.exports = Words;
