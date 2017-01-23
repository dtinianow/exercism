class Hamming {
  compute(a, b) {
    this.validateInput(a, b);
    const strandA = a.split('');
    const strandB = b.split('');

    return strandA.reduce((sum, nucleotide, index) => {
      if (nucleotide !== strandB[index]) sum += 1;
      return sum;
    }, 0);
  }

  validateInput(a, b) {
    if (a.length !== b.length) {
      throw new Error('DNA strands must be of equal length.');
    }
  }
}

export default Hamming;
