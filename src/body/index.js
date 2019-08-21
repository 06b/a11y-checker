"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasDuplicateIds = exports.hasPositiveTabIndex = exports.hasAudioTrack = exports.hasVideoTrack = exports.hasForLabel = exports.hasIframeTitle = exports.hasFormsLabel = exports.hasSVGRole = exports.hasButtonsText = exports.hasLinksTarget = exports.hasLinksHref = exports.hasLinksText = exports.hasImagesAlt = exports.hasHeadingOnce = void 0;

var _warn = require("../utils/warn");

var _string = require("../utils/string");

var _dom = require("../utils/dom");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var hasHeadingOnce = function hasHeadingOnce() {
  var H1 = (0, _dom.getElements)('h1');
  var hasMultiHeading = H1.length > 1;
  if (hasMultiHeading) (0, _warn.Warning)('Page has Multi <h1> tag. Fix: use only one <h1> in the page.');
};

exports.hasHeadingOnce = hasHeadingOnce;

var hasImagesAlt = function hasImagesAlt() {
  var IMGS = _toConsumableArray((0, _dom.getElements)('img'));

  var imagesWithoutAlt = IMGS.filter(function (img) {
    return !(0, _dom.hasAttribute)(img, 'alt');
  });
  var hasMissingAlt = imagesWithoutAlt.length > 0;
  var withoutAltWarning = imagesWithoutAlt.forEach(function (image) {
    return (0, _warn.Warning)("Image Alt is missing. Fix: Add alt=\"IMAGE WELL DESCRIBED\" to ".concat(image.outerHTML));
  });
  if (hasMissingAlt) withoutAltWarning;
};

exports.hasImagesAlt = hasImagesAlt;

var hasLinksText = function hasLinksText() {
  var LINKS = _toConsumableArray((0, _dom.getElements)('a'));

  var warningMessage = 'Link text is missing. Fix: DESCRIBE PURPOSE OF LINK';
  var linksWithoutText = LINKS.filter(function (link) {
    return (0, _string.isEmpty)(link.textContent) && !(0, _dom.hasAccessibileText)(link);
  });
  var hasMissingText = linksWithoutText.length > 0;
  var withoutTextWarning = linksWithoutText.forEach(function (link) {
    return (0, _warn.Warning)("".concat(warningMessage, " to ").concat(link.outerHTML));
  });
  if (hasMissingText) withoutTextWarning;
};

exports.hasLinksText = hasLinksText;

var hasLinksHref = function hasLinksHref() {
  var LINKS = _toConsumableArray((0, _dom.getElements)('a'));

  var linksWithoutHref = LINKS.filter(function (link) {
    return (!(0, _dom.hasAttribute)(link, 'href') || (0, _string.isEmpty)((0, _dom.getAttribute)(link, 'href'))) && !(0, _dom.hasAttribute)(link, 'role');
  });
  var hasMissingHref = linksWithoutHref.length > 0;
  var withoutHrefWarning = linksWithoutHref.forEach(function (link) {
    return (0, _warn.Warning)("Link Href is missing. Fix: Add href=\"LINK URL\" to ".concat(link.outerHTML));
  });
  if (hasMissingHref) withoutHrefWarning;
};

exports.hasLinksHref = hasLinksHref;

var hasLinksTarget = function hasLinksTarget() {
  var LINKS = _toConsumableArray((0, _dom.getElements)('a'));

  var warningMessage = 'Hint message is missing. Should add hint message to recognize this link will open in new tab. Fix: Add aria-describedby="ELEMENT ID"';
  var linksWithTarget = LINKS.filter(function (link) {
    return (0, _dom.getAttribute)(link, 'target') === '_blank' && !(0, _dom.hasAttribute)(link, 'aria-describedby');
  });
  var hasTarget = linksWithTarget.length > 0;
  var missingTargetHint = linksWithTarget.forEach(function (link) {
    return (0, _warn.Warning)("".concat(warningMessage, " to ").concat(link.outerHTML));
  });
  if (hasTarget) missingTargetHint;
};

exports.hasLinksTarget = hasLinksTarget;

var hasButtonsText = function hasButtonsText() {
  var BUTTONS = _toConsumableArray((0, _dom.getElements)('button'));

  var warningMessage = 'Button text or aria-label is missing. Fix: Add aria-label="VALUE" or <button>VALUE</button>';
  var buttonsWithoutText = BUTTONS.filter(function (button) {
    return (0, _string.isEmpty)(button.textContent) && !(0, _dom.hasAccessibileText)(button);
  });
  var hasMissingText = buttonsWithoutText.length > 0;
  var withoutTextWarning = buttonsWithoutText.forEach(function (button) {
    return (0, _warn.Warning)("".concat(warningMessage, " to ").concat(button.outerHTML));
  });
  if (hasMissingText) withoutTextWarning;
};

exports.hasButtonsText = hasButtonsText;

var hasForLabel = function hasForLabel() {
  var LABELS = _toConsumableArray((0, _dom.getElements)('label'));

  var isLabeld = function isLabeld(label) {
    if (!(0, _dom.hasAttribute)(label, 'for') || (0, _string.isEmpty)((0, _dom.getAttribute)(label, 'for'))) (0, _warn.Warning)("For is missing in label. Fix: Add for=\"INPUT ID\" to ".concat(label.outerHTML));
  };

  var missingForLabel = LABELS.forEach(isLabeld);
  return missingForLabel;
};

exports.hasForLabel = hasForLabel;

var hasSVGRole = function hasSVGRole() {
  var SVGS = _toConsumableArray((0, _dom.getElements)('SVG'));

  var hasMissingRole = SVGS.some(function (svg) {
    return (0, _dom.getAttribute)(svg, 'aria-hidden') !== 'true' && !(0, _dom.hasAttribute)(svg, 'role') && !(0, _dom.getAttribute)(svg, 'id');
  });
  if (hasMissingRole) (0, _warn.Warning)('SVG Role is missing. Fix: Add role="img" or (aria-hidden="true" if you need to hide element from SR).');
};

exports.hasSVGRole = hasSVGRole;

var hasIframeTitle = function hasIframeTitle() {
  var IFRAMES = _toConsumableArray((0, _dom.getElements)('iframe'));

  var iframeWithoutTitle = IFRAMES.some(function (ifrmae) {
    return !(0, _dom.hasAttribute)(ifrmae, 'title');
  });
  if (iframeWithoutTitle) (0, _warn.Warning)('Title is missing in iframe. Fix: Add title="DESCRIBE CONTENT OF FRAME" to <iframe>');
};

exports.hasIframeTitle = hasIframeTitle;

var hasVideoTrack = function hasVideoTrack() {
  var VIDEOS = _toConsumableArray((0, _dom.getElements)('video'));

  var videoWithoutTrack = VIDEOS.some(_dom.hasTrack);
  if (videoWithoutTrack) (0, _warn.Warning)('Video track is missing. Fix: Add <track> element with subtitles, captions to >video>');
};

exports.hasVideoTrack = hasVideoTrack;

var hasAudioTrack = function hasAudioTrack() {
  var AUDIOS = _toConsumableArray((0, _dom.getElements)('audio'));

  var audioWithoutTrack = AUDIOS.some(_dom.hasTrack);
  if (audioWithoutTrack) (0, _warn.Warning)('Audio track is missing. Fix: Add <track> element with subtitles, captions to <audio>');
};

exports.hasAudioTrack = hasAudioTrack;

var hasFormsLabel = function hasFormsLabel() {
  var FORMS = _toConsumableArray((0, _dom.getElements)('form'));

  var formsWithoutLabels = FORMS.some(function (video) {
    return !(0, _dom.hasAccessibileText)(video);
  });
  if (formsWithoutLabels) (0, _warn.Warning)('Forms Label is missing. Fix: Add aria-label, aria-labelledby to <form>');
};

exports.hasFormsLabel = hasFormsLabel;

var hasPositiveTabIndex = function hasPositiveTabIndex() {
  var ALLELEMENTS = _toConsumableArray((0, _dom.getElements)('*'));

  var elementsWithTabindex = ALLELEMENTS.filter(function (element) {
    return (0, _dom.getAttribute)(element, 'tabindex') > 0;
  });
  var hasPositiveindex = elementsWithTabindex.length > 0;
  if (hasPositiveindex) (0, _warn.Warning)('Avoid using positive integer values for tabindex. Fix: Remove/Replace tabindex=">0" ');
};

exports.hasPositiveTabIndex = hasPositiveTabIndex;

var hasDuplicateIds = function hasDuplicateIds() {
  var ALLELEMENTS = _toConsumableArray((0, _dom.getElements)('*'));

  var elementsWithId = ALLELEMENTS.map(function (element) {
    return (0, _dom.getAttribute)(element, 'id');
  }).filter(function (el) {
    return !(0, _string.isNull)(el);
  });

  var uniqueIds = _toConsumableArray(new Set(elementsWithId));

  var hasDuplicate = elementsWithId.length > uniqueIds.length;
  if (hasDuplicate) (0, _warn.Warning)('Avoid duplicate ids, ID must be unique. Fix: Remove/Replace duplicate id');
};

exports.hasDuplicateIds = hasDuplicateIds;