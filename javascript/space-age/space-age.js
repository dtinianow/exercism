var SpaceAge = function(seconds){
  this.seconds = seconds;
  this.secondsPerEarthYear = 31557600;
  this.ageOnEarth = seconds / this.secondsPerEarthYear;
  this.yearLengthRatio = {
    'earth': 1.00,
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132
  };
};

SpaceAge.prototype.onEarth = function(){ return this.calculateAge('earth'); };
SpaceAge.prototype.onMercury = function(){ return this.calculateAge('mercury'); };
SpaceAge.prototype.onVenus = function(){ return this.calculateAge('venus'); };
SpaceAge.prototype.onMars = function(){ return this.calculateAge('mars'); };
SpaceAge.prototype.onJupiter = function(){ return this.calculateAge('jupiter'); };
SpaceAge.prototype.onSaturn = function(){ return this.calculateAge('saturn'); };
SpaceAge.prototype.onUranus = function(){ return this.calculateAge('uranus'); };
SpaceAge.prototype.onNeptune = function(){ return this.calculateAge('neptune'); };

SpaceAge.prototype.calculateAge = function(planet){
  return +((this.ageOnEarth) / this.yearLengthRatio[planet]).toFixed(2);
};

module.exports = SpaceAge;
