class Trinary {
  constructor(trinary) {
    this.trinary = trinary;
  }

  toDecimal() {
    if (/[^\d]+/.test(this.trinary)) return 0;
    
    return this.trinary
    .split('')
    .reverse()
    .map((digit, index) => parseInt(digit) * Math.pow(3, index))
    .reduce(function (a, b) { return a + b; }, 0);
  }
}

module.exports = Trinary;
