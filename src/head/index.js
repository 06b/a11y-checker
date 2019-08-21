"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasDocumentScalable = exports.hasDocumentMetaCharset = exports.hasDocumentTitle = exports.hasDocumentLanguage = exports.hasDocumentType = void 0;

var _warn = require("../utils/warn");

var _string = require("../utils/string");

var _dom = require("../utils/dom");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var hasDocumentType = function hasDocumentType() {
  if (!_dom.doctype) (0, _warn.Warning)('Doctype is missing. Fix: Add <!DOCTYPE html>');
};

exports.hasDocumentType = hasDocumentType;

var hasDocumentTitle = function hasDocumentTitle() {
  if ((0, _string.isEmpty)(_dom.title)) (0, _warn.Warning)('Title is missing. Fix: <title>WELL DESCRIBED TITLE</title>');
};

exports.hasDocumentTitle = hasDocumentTitle;

var hasDocumentLanguage = function hasDocumentLanguage() {
  var HTML = (0, _dom.getElement)('html');
  var hasLanguageAttr = (0, _dom.hasAttribute)(HTML, 'lang');

  if (hasLanguageAttr) {
    var getLanguageValue = (0, _dom.getAttribute)(HTML, 'lang');
    var isLanguageValueNotExist = (0, _string.isEmpty)(getLanguageValue);
    if (isLanguageValueNotExist) (0, _warn.Warning)('Language value is missing in HTML element. Fix: Add lang="LANGUAGE VALUE" to <html>');
  } else {
    (0, _warn.Warning)('Language is missing in HTML element. Fix: Add lang="LANGUAGE VALUE" to <html>');
  }
};

exports.hasDocumentLanguage = hasDocumentLanguage;

var hasDocumentMetaCharset = function hasDocumentMetaCharset() {
  var META = _toConsumableArray((0, _dom.getElements)('meta'));

  var hasMetaCharset = META.some(function (tag) {
    return (0, _dom.hasAttribute)(tag, 'charset');
  });
  if (!hasMetaCharset) (0, _warn.Warning)('Document encoding is missing. Fix: Add <meta charset="utf-8"/>');
};

exports.hasDocumentMetaCharset = hasDocumentMetaCharset;

var hasDocumentScalable = function hasDocumentScalable() {
  var META = _toConsumableArray((0, _dom.getElements)('meta'));

  var hasMetaScalable = META.some(function (el) {
    return (0, _dom.getAttribute)(el, 'user-scalable') === 'no';
  });
  if (hasMetaScalable) (0, _warn.Warning)('Document must not use the user-scalable=no. Fix: Remove user-scalable=no from <meta name=viewport>');
};

exports.hasDocumentScalable = hasDocumentScalable;