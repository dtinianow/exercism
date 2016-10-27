var Bob = function() {};

Bob.prototype.hey = function(input) {
  var reply = 'Whatever.';

  if (input.trim() == '') {
    reply = 'Fine. Be that way!'
  } else if (input == input.toUpperCase() && input != input.toLowerCase()) {
    reply = 'Whoa, chill out!';
  } else if (input.endsWith('?')) {
    reply = 'Sure.'
  }
  return reply;
};

module.exports = Bob;
