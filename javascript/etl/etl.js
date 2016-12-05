var ETL = function() {};

ETL.prototype.transform = function(oldScore) {
  var newScore = {};
  for (var pointValue in oldScore) {
    for (var i = 0; i < oldScore[pointValue].length; i++) {
      var letter = oldScore[pointValue][i].toLowerCase();
      newScore[letter] = parseInt(pointValue);
    };
  };
  return newScore;
};

module.exports = ETL;
