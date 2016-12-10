var Triangle = function (x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

Triangle.prototype.kind = function () {
  if (this.invalid()) { throw 'Invalid Triangle' }
  if (this.isEquilateral()) { return 'equilateral'; }
  if (this.isScalene()) { return 'scalene'; }
  return 'isosceles';
};

Triangle.prototype.isEquilateral = function () {
  return this.x == this.y && this.y == this.z;
};

Triangle.prototype.isScalene = function () {
  return this.x != this.y && this.y != this.z && this.x != this.z;
};

Triangle.prototype.invalid = function () {
  return this.invalidSize() || this.inequality();
}

Triangle.prototype.invalidSize = function () {
  return this.x <= 0 || this.y <= 0 || this.z <= 0;
};

Triangle.prototype.inequality = function () {
  return this.x + this.y < this.z || this.x + this.z < this.y || this.y + this.z < this.x;
};

module.exports = Triangle;
