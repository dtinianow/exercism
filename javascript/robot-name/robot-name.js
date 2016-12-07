var usedNames = {};

var Robot = function () {
  this.name = this.generateName();
};

Robot.prototype.generateName = function () {
  var name = this.generateChars(2) + this.generateNums(3);
  if (usedNames[name]) { return this.generateName(); }
  usedNames[name] = true;
  return name;
};

Robot.prototype.generateChars = function (length) {
  var chars = '';
  while (chars.length < length) {
    var charCode = Math.floor((Math.random() * 26)) + 65;
    chars += String.fromCharCode(charCode);
  }
  return chars;
};

Robot.prototype.generateNums = function (length) {
  var nums = '';
  while (nums.length < length) { nums += Math.floor(Math.random() * 10); }
  return nums;
};

Robot.prototype.reset = function () {
  this.name = this.generateName();
};

module.exports = Robot;
