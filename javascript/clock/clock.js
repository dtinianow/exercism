var minutesPerHour = 60;
var hoursPerDay = 24;

var Clock = function(hour, minute) {
  this.hour = hour || 0;
  this.minute = minute || 0;
};

Clock.prototype.toString = function() {
  this.rollOverMinutesToHours();
  var hour = this.adjustTime(this.hour, hoursPerDay);
  var minute = this.adjustTime(this.minute, minutesPerHour);
  return this.formatTime(hour, minute);
};

Clock.prototype.plus = function(minutes) {
  this.minute += minutes;
  return this;
};

Clock.prototype.minus = function(minutes) {
  this.minute -= minutes;
  return this;
};

Clock.prototype.equals = function(clock) {
  return this.toString() === clock.toString();
};

Clock.prototype.rollOverMinutesToHours = function() {
  this.hour += Math.floor(this.minute / minutesPerHour);
};

Clock.prototype.adjustTime = function(time, adjustor) {
  var adjustedTime = time % adjustor;
  if (adjustedTime < 0) { adjustedTime += adjustor; }
  return adjustedTime;
};

Clock.prototype.zeroPad = function(time) {
  if (time < 10) { time = "0" + time; }
  return time;
};

Clock.prototype.formatTime = function(hour, minute) {
  return this.zeroPad(hour) + ":" + this.zeroPad(minute);
};

function at(hour, minute) {
  return new Clock(hour, minute);
};

module.exports = {at: at};
