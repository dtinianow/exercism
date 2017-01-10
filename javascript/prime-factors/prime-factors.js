function primeFactors(input) {
  var num = input;
  var factors = [];
  var current_factor = 2;

  if (num < 2) { return factors };

  while (num > 1) {
    if (num % current_factor === 0) {
      factors.push(current_factor)
      num /= current_factor;
    } else {
      current_factor += 1;
    }
  }
  return factors;
};

module.exports = {for: primeFactors};
