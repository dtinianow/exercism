class Transcriptor {
  constructor() {
    this.conversion = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    };
  }

  toRna(nucleotides) {
    this.validateInput(nucleotides);
    return nucleotides
            .split('')
            .map(nucleotide => this.conversion[nucleotide])
            .join('');
  }

  validateInput(nucleotides) {
    if (/[^GCTA]/.test(nucleotides)) throw new Error('Invalid input DNA.');
  }
}

export default Transcriptor;
