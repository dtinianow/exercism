class Anagram {
  constructor(input) {
    this.input = input;
  }

  matches(...args) {
    const words = Array.prototype.concat(...args);
    return words.filter(word => this.isAnagram(word));
  }

  alphabetize(text) {
    return text.toLowerCase().split('').sort().join('');
  }

  isAnagram(word) {
    return this.isDistinctFromInput(word) && this.isAlphabeticMatch(word);
  }

  isAlphabeticMatch(word) {
    return this.alphabetize(word) === this.alphabetize(this.input);
  }

  isDistinctFromInput(word) {
    return word.toLowerCase() !== this.input.toLowerCase();
  }
}
export default Anagram;
