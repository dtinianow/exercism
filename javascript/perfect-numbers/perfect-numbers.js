class PerfectNumbers {
  classify(num) {
    if (num <= 0) return 'Classification is only possible for natural numbers.'
    const aliquot_sum = this.getFactors(num).reduce((a, b) => a + b, 0);
    return this.determineType(aliquot_sum, num);
  }

  determineType(aliquot_sum, num) {
    if (aliquot_sum === num) return 'perfect';
    if (aliquot_sum > num) return 'abundant';
    if (aliquot_sum < num) return 'deficient';
  }

  getFactors(num) {
    let factors = [];
    for (let i = 1; i < num; i++) { if (num % i === 0) factors.push(i); }
    return factors;
  }
}

module.exports = PerfectNumbers;
