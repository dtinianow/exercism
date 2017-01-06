var Binary = function(binary) {
  this.binary = binary;
};

Binary.prototype.toDecimal = function() {
  if (/[^01]/.test(this.binary)) { return 0; }

  var decimal = 0;
  var digits = this.binary.split('').reverse();

  for (var i = 0; i < digits.length; i++) {
    decimal += parseInt(digits[i]) * Math.pow(2, i);
  }

  return decimal;
};

module.exports = Binary;
