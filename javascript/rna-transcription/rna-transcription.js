var DnaTranscriber = function() {
  this.transcription = {'C': 'G', 'G': 'C', 'A': 'U', 'T': 'A'}
}

DnaTranscriber.prototype.toRna = function(strand) {
  var newStrand = '';
  for (var i = 0; i < strand.length; i++) {
    newStrand += this.transcription[strand[i]];
  }
  return newStrand;
}

module.exports = DnaTranscriber;
