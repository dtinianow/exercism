var bigInt = require('./big-integer');

var Grains = function() {
  this.squares = 64;
};

Grains.prototype.square = function(num) {
  if (num < 1 || num > 64) { throw 'InvalidNumber' };
  return bigInt(2).pow(num - 1).toString();
};

Grains.prototype.total = function() {
  var total = bigInt(0);
  for (var i = 1; i <= this.squares; i++) {
    total = total.add(this.square(i));
  }
  return total.toString();
}

module.exports = Grains;

var bigInt = require('./big-integer');

var Grains = function() {
  this.squares = 64;
};
