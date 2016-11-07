var Gigasecond = function(date){
  this.startDate = date;
  this.gigasecond = 1000000000000;
};

Gigasecond.prototype.date = function() {
  var startTime = this.startDate.getTime();
  return new Date(startTime + this.gigasecond);
};

module.exports = Gigasecond;
