"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Words = (function () {
  function Words() {
    _classCallCheck(this, Words);
  }

  _createClass(Words, [{
    key: "count",
    value: function count(input) {
      return input.toLowerCase().trim().split(/\s+/).reduce(function (acc, word) {
        acc.hasOwnProperty(word) ? acc[word]++ : acc[word] = 1;
        return acc;
      }, {});
    }
  }]);

  return Words;
})();

exports["default"] = Words;
module.exports = exports["default"];