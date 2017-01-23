"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isLeapYear = function isLeapYear(year) {
  return divisibleBy4(year) && (!divisibleBy100(year) || divisibleBy400(year));
};

var divisibleBy4 = function divisibleBy4(n) {
  return n % 4 === 0;
};

var divisibleBy100 = function divisibleBy100(n) {
  return n % 100 === 0;
};

var divisibleBy400 = function divisibleBy400(n) {
  return n % 400 === 0;
};

exports["default"] = isLeapYear;
module.exports = exports["default"];