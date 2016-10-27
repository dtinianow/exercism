var Hamming = function() {}

Hamming.prototype.compute = function(strandA, strandB){
  var strand = strandA.split('');

  if (strand.length != strandB.length) {
    throw 'DNA strands must be of equal length.'
  }

  return strand.reduce((total, letter, index) => {
    return (strand[index] == strandB[index]) ? total : ++total;
  }, 0)
}

module.exports = Hamming;
