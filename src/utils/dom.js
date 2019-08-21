"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasTrack = exports.hasAccessibileText = exports.title = exports.doctype = exports.getAttribute = exports.hasAttribute = exports.getElements = exports.getElement = void 0;

var getElement = function getElement(element) {
  return document.querySelector(element);
};

exports.getElement = getElement;

var getElements = function getElements(element) {
  return document.querySelectorAll(element);
};

exports.getElements = getElements;

var hasAttribute = function hasAttribute(element, attribute) {
  return element.hasAttribute(attribute);
};

exports.hasAttribute = hasAttribute;

var getAttribute = function getAttribute(element, attribute) {
  return element.getAttribute(attribute);
};

exports.getAttribute = getAttribute;
var doctype = document.doctype;
exports.doctype = doctype;
var title = document.title;
exports.title = title;

var hasAccessibileText = function hasAccessibileText(element) {
  return hasAttribute(element, 'aria-label') || hasAttribute(element, 'aria-labelledby');
};

exports.hasAccessibileText = hasAccessibileText;

var hasTrack = function hasTrack(track) {
  return track.textTracks.length === 0;
};

exports.hasTrack = hasTrack;