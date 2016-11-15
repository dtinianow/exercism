var BeerSong = function(){};

BeerSong.prototype.verse = function(num) {
  var firstRefrain = ' bottles of beer on the wall, ';
  var middleRefrain = ' bottles of beer.\nTake one down and pass it around, ';
  var lastRefrain = ' bottles of beer on the wall.\n';
  var oldNumFirst = num;
  var oldNumLast = num;
  var newNum = num - 1;
  if (num === 2) { lastRefrain = ' bottle of beer on the wall.\n'};
  if (num === 1) {
    firstRefrain = ' bottle of beer on the wall, ';
    middleRefrain = ' bottle of beer.\nTake it down and pass it around, ';
    lastRefrain = ' bottles of beer on the wall.\n';
    newNum = 'no more';
  };
  if (num === 0) {
    num = 'no more'
    firstRefrain = ' bottles of beer on the wall, ';
    middleRefrain = ' bottles of beer.\nGo to the store and buy some more, ';
    lastRefrain = ' bottles of beer on the wall.\n';
    oldNumFirst = 'No more';
    oldNumLast = 'no more';
    newNum = 99;
  };
  return oldNumFirst + firstRefrain + oldNumLast + middleRefrain + newNum + lastRefrain;
 };

 BeerSong.prototype.sing = function(a, b) {
   var song = '';
   if (b === undefined) { b = 0 };
   for (var i = a; a >= b; a--) {
     song += this.verse(a);
     if (a != b) { song += '\n' }
   }
   return song;
 }

module.exports = BeerSong;
