'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Hamming = (function () {
  function Hamming() {
    _classCallCheck(this, Hamming);
  }

  _createClass(Hamming, [{
    key: 'compute',
    value: function compute(a, b) {
      this.validateInput(a, b);
      var strandA = a.split('');
      var strandB = b.split('');

      return strandA.reduce(function (sum, nucleotide, index) {
        if (nucleotide !== strandB[index]) sum += 1;
        return sum;
      }, 0);
    }
  }, {
    key: 'validateInput',
    value: function validateInput(a, b) {
      if (a.length !== b.length) {
        throw new Error('DNA strands must be of equal length.');
      }
    }
  }]);

  return Hamming;
})();

exports['default'] = Hamming;
module.exports = exports['default'];