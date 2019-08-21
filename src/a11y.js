"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var head = _interopRequireWildcard(require("./head"));

var body = _interopRequireWildcard(require("./body"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var a11yChecker = function a11yChecker() {
  head.hasDocumentType();
  head.hasDocumentTitle();
  head.hasDocumentLanguage();
  head.hasDocumentMetaCharset();
  head.hasDocumentScalable();
  body.hasHeadingOnce();
  body.hasImagesAlt();
  body.hasLinksText();
  body.hasLinksHref();
  body.hasLinksTarget();
  body.hasButtonsText();
  body.hasSVGRole();
  body.hasIframeTitle();
  body.hasFormsLabel();
  body.hasForLabel();
  body.hasVideoTrack();
  body.hasAudioTrack();
  body.hasPositiveTabIndex();
  body.hasDuplicateIds();
};

var _default = a11yChecker;
exports.default = _default;