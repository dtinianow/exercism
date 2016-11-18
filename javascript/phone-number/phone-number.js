var PhoneNumber = function(input){
  this.input = input;
  this.digits = this.number();
};

PhoneNumber.prototype.number = function(){
  var digits = this.input.replace(/\D/g,'');
  if (digits.length === 11 && digits.charAt(0) === '1') { return digits.substring(1) };
  if (digits.length > 10 || digits.length < 10) { return '0000000000' };
  return digits;
};

PhoneNumber.prototype.areaCode = function(){
  return this.digits.substring(0, 3);
};

PhoneNumber.prototype.toString = function(){
  var formattedAreaCode = '(' + this.areaCode() + ') '
  var formattedNumber = this.digits.substring(3, 6) + '-' + this.digits.substring(6, 11);
  return formattedAreaCode + formattedNumber;
};

module.exports = PhoneNumber;
