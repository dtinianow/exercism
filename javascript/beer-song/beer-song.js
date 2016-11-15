var BeerSong = function(){};

BeerSong.prototype.verse = function(num) {
  var currentNum = this.countBeer(num);
  var newNum = this.recountBeer(num);
  var firstRefrain = this.bottlesOfBeer(currentNum) + ' on the wall, ';
  var middleRefrain = this.bottlesOfBeer(currentNum) + this.takeBeerDown(currentNum);
  var lastRefrain = this.bottlesOfBeer(newNum) + ' on the wall.\n';
  return currentNum + firstRefrain + this.countBeer(currentNum) + middleRefrain + newNum + lastRefrain;
};

BeerSong.prototype.bottlesOfBeer = function(num) {
  var bottle = ' bottle';
  var beerOnTheWall = ' of beer';
  if (num === 'No more') { num = num.toLowerCase() };
  if (num > 1 || num === 'no more' || num === 0) { bottle += 's' }
  return bottle + beerOnTheWall;
};

BeerSong.prototype.countBeer = function(num) {
  var count = num;
  if (count === 'No more') { count = 'no more' };
  if (count === 0) { count = 'No more' };
  return count;
};

BeerSong.prototype.recountBeer = function(num) {
  var count = num - 1;
  if (count === 0) { count = 'no more'};
  if (count === -1) { count = 99 };
  return count;
};

BeerSong.prototype.takeBeerDown = function(num) {
  var quantity = 'one';
  if (num === 'No more') { return '.\nGo to the store and buy some more, ' };
  if (num === 1) { quantity = 'it' };
  return '.\nTake ' + quantity + ' down and pass it around, ';
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
