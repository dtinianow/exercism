class PerfectNumbers {
  classify(num) {
    if (num <= 0) return 'Classification is only possible for natural numbers.'
    const aliquot_sum = this.getAliquotSum(num, this.determineIncrement(num));
    return this.determineType(aliquot_sum, num);
  }

  determineType(aliquot_sum, num) {
    if (aliquot_sum === num) return 'perfect';
    if (aliquot_sum > num) return 'abundant';
    if (aliquot_sum < num) return 'deficient';
  }

  getAliquotSum(num, n) {
    const half = Math.floor(num / 2);
    let aliquot_sum = 0;
    for (let i = 1; i <= half; i += n) { if (num % i === 0) aliquot_sum += i };
    return aliquot_sum;
  }

  determineIncrement(num) {
    return num % 2 === 0 ? 1 : 2;
  }
}

module.exports = PerfectNumbers;
