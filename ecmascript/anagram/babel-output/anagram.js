'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Anagram = (function () {
  function Anagram(input) {
    _classCallCheck(this, Anagram);

    this.input = input;
  }

  _createClass(Anagram, [{
    key: 'matches',
    value: function matches() {
      var _Array$prototype,
          _this = this;

      var words = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, arguments);
      return words.filter(function (word) {
        return _this.isAnagram(word);
      });
    }
  }, {
    key: 'alphabetize',
    value: function alphabetize(text) {
      return text.toLowerCase().split('').sort().join('');
    }
  }, {
    key: 'isAnagram',
    value: function isAnagram(word) {
      return this.isDistinctFromInput(word) && this.isAlphabeticMatch(word);
    }
  }, {
    key: 'isAlphabeticMatch',
    value: function isAlphabeticMatch(word) {
      return this.alphabetize(word) === this.alphabetize(this.input);
    }
  }, {
    key: 'isDistinctFromInput',
    value: function isDistinctFromInput(word) {
      return word.toLowerCase() !== this.input.toLowerCase();
    }
  }]);

  return Anagram;
})();

exports['default'] = Anagram;
module.exports = exports['default'];