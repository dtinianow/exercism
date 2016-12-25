var Acronyms = function() {};

Acronyms.parse = function(text) {
  var acronym = "";
  var words = text.split(/[ -]/);

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    acronym += word[0].toUpperCase();
    if (!isUpperCase(word)) { acronym += findCapitalLetters(word); }
  }

  return acronym;
}

var findCapitalLetters = function(word) {
  var capitalLetters = "";

  for (var j = 1; j < word.length; j++) {
    var char = word[j];

    if (isUpperCase(char)) { capitalLetters += char; }
  }

  return capitalLetters;
}

var isUpperCase = function(chars) {
  return chars === chars.toUpperCase() && chars !== chars.toLowerCase();
}

module.exports = Acronyms;
