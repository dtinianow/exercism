const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

class Pangram {
  constructor(input) {
    this.input = input;
  }

  isPangram() {
    return this.letters() === ALPHABET;
  }

  letters() {
    const letters = this.input.toLowerCase().replace(/[^a-z]/gi, '').split('');
    return [...new Set(letters)].sort().join('');
  }
}


export default Pangram;
