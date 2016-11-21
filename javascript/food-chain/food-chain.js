var FoodChain = function(){
  this.lyrics = {
    1: {
      'animal': 'fly',
      'reason': 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
    },
    2: {
      'animal': 'spider',
      'reason': 'She swallowed the spider to catch the fly.\n'
    },
    3: {
      'animal': 'bird',
      'reason': 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n',
      'reaction': 'How absurd to swallow a bird!\n'
    },
    4: {
      'animal': 'cat',
      'reason': 'She swallowed the cat to catch the bird.\n',
      'reaction': 'Imagine that, to swallow a cat!\n'
    },
    5: {
      'animal': 'dog',
      'reason': 'She swallowed the dog to catch the cat.\n',
      'reaction': 'What a hog, to swallow a dog!\n'
    },
    6: {
      'animal': 'goat',
      'reason': 'She swallowed the goat to catch the dog.\n',
      'reaction': 'Just opened her throat and swallowed a goat!\n'
    },
    7: {
      'animal': 'cow',
      'reason': 'She swallowed the cow to catch the goat.\n',
      'reaction': 'I don\'t know how she swallowed a cow!\n'
    },
    8: {
      'animal': 'horse',
      'reaction': 'She\'s dead, of course!\n'
    }
  };
};

FoodChain.prototype.verse = function(verseNum) {
  var song = 'I know an old lady who swallowed a ';
  song += this.lyrics[verseNum]['animal'] + '.\n';
  if (verseNum === 2) { song += 'It wriggled and jiggled and tickled inside her.\n' }
  if (this.lyrics[verseNum]['reaction']) { song += this.lyrics[verseNum]['reaction'] };
  if (verseNum === 8) { return song };
  return this.addLyrics(verseNum, song);
};

FoodChain.prototype.addLyrics = function(verseNum, song) {
  var self = this;
  if (verseNum === 1) {
    song += this.lyrics[verseNum]['reason'];
    return song;
  } else {
    song += this.lyrics[verseNum]['reason'];
    return this.addLyrics(verseNum - 1, song);
  };
};

FoodChain.prototype.verses = function(numA, numB) {
  var song = '';
  for (var i = numB; i >= numA; i--) {
    song = this.verse(i) + '\n' + song;
  };
  return song;
};

module.exports = FoodChain;
