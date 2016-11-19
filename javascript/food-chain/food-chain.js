var FoodChain = function(){
  this.lyrics = {
    1: {
      'a': 'I know an old lady who swallowed a fly.\n',
      'b': 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
    },
    2: {
      'a': 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n',
      'b': 'She swallowed the spider to catch the fly.\n'
    },
    3: {
      'a': 'I know an old lady who swallowed a bird.\n',
      'b': 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n',
      'c': 'How absurd to swallow a bird!\n'
    },
    4: {
      'a': 'I know an old lady who swallowed a cat.\n',
      'b': 'She swallowed the cat to catch the bird.\n',
      'c': 'Imagine that, to swallow a cat!\n'
    },
    5: {
      'a': 'I know an old lady who swallowed a dog.\n',
      'b': 'She swallowed the dog to catch the cat.\n',
      'c': 'What a hog, to swallow a dog!\n'
    },
    6: {
      'a': 'I know an old lady who swallowed a goat.\n',
      'b': 'She swallowed the goat to catch the dog.\n',
      'c': 'Just opened her throat and swallowed a goat!\n'
    },
    7: {
      'a': 'I know an old lady who swallowed a cow.\n',
      'b': 'She swallowed the cow to catch the goat.\n',
      'c': 'I don\'t know how she swallowed a cow!\n'
    },
    8: {
      'a': 'I know an old lady who swallowed a horse.\n',
      'c': 'She\'s dead, of course!\n'
    }
  };
};

FoodChain.prototype.verse = function(num) {
  var song = '';
  song += this.lyrics[num]['a'];
  if (this.lyrics[num]['c']) { song += this.lyrics[num]['c'] };
  if (num === 8) { return song };
  return this.addLyrics(num, song);
};

FoodChain.prototype.addLyrics = function(num, song) {
  var self = this;
  if (num === 1) {
    song += this.lyrics[num]['b'];
    return song;
  } else {
    song += this.lyrics[num]['b'];
    return this.addLyrics(num - 1, song);
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
