'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

var Pangram = (function () {
  function Pangram(input) {
    _classCallCheck(this, Pangram);

    this.input = input;
  }

  _createClass(Pangram, [{
    key: 'isPangram',
    value: function isPangram() {
      return this.letters() === ALPHABET;
    }
  }, {
    key: 'letters',
    value: function letters() {
      var letters = this.input.toLowerCase().replace(/[^a-z]/gi, '').split('');
      return [].concat(_toConsumableArray(new Set(letters))).sort().join('');
    }
  }]);

  return Pangram;
})();

exports['default'] = Pangram;
module.exports = exports['default'];