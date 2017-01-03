const ROMAN_NUMERALS = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
};

function toRoman(n, romanNumeral = '') {
  var leftOver = 0;

  while (n > 0) {
    if (ROMAN_NUMERALS[n]) {
      romanNumeral += ROMAN_NUMERALS[n];
      n -= n;
    } else {
      leftOver += 1;
      n -= 1;
    }
  }

  if (leftOver > 0) { return toRoman(leftOver, romanNumeral); }

  return romanNumeral;
};

module.exports = toRoman;
