"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNull = exports.isEmpty = exports.toLower = void 0;

var toLower = function toLower(string) {
  return string.toLowerCase();
};

exports.toLower = toLower;

var isEmpty = function isEmpty(string) {
  return string.trim() === '';
};

exports.isEmpty = isEmpty;

var isNull = function isNull(element) {
  return element === null;
};

exports.isNull = isNull;