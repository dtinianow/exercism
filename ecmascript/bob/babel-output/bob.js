'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Bob = (function () {
  function Bob() {
    _classCallCheck(this, Bob);
  }

  _createClass(Bob, [{
    key: 'hey',
    value: function hey(message) {
      var responseType = 'default';

      if (this.is_question(message)) {
        responseType = 'question';
      }
      if (this.is_yell(message)) {
        responseType = 'yell';
      }
      if (this.is_silence(message)) {
        responseType = 'silence';
      }
      return Bob.responses[responseType];
    }
  }, {
    key: 'is_question',
    value: function is_question(message) {
      return message.slice(-1) === '?';
    }
  }, {
    key: 'is_yell',
    value: function is_yell(message) {
      return message === message.toUpperCase() && message !== message.toLowerCase();
    }
  }, {
    key: 'is_silence',
    value: function is_silence(message) {
      return "" === message.replace(/\s+/, "");
    }
  }]);

  return Bob;
})();

Bob.responses = {
  'default': 'Whatever.',
  'yell': 'Whoa, chill out!',
  'question': 'Sure.',
  'silence': 'Fine. Be that way!'
};

exports['default'] = Bob;
module.exports = exports['default'];