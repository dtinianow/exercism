var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  var year = this.year,
      divisibleBy4 = (year % 4 === 0),
      divisibleBy100 = (year % 100 === 0),
      divisibleBy400 = (year % 400 === 0);

  return divisibleBy4 && (!divisibleBy100 || divisibleBy400);
};

module.exports = Year;
