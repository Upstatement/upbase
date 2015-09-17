'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _chromaJs = require('chroma-js');

var _chromaJs2 = _interopRequireDefault(_chromaJs);

var _swig = require('swig');

var _swigExtras = require('swig-extras');

var _swigExtras2 = _interopRequireDefault(_swigExtras);

var _swigLibFilters = require('swig/lib/filters');

var _swigLibFilters2 = _interopRequireDefault(_swigLibFilters);

var swig = new _swig.Swig();
exports['default'] = swig;

_swigExtras2['default'].useFilter(swig, 'split');
_swigExtras2['default'].useFilter(swig, 'trim');
_swigExtras2['default'].useFilter(swig, 'groupby');

var safe = function safe(fn) {
  return fn.safe = true && fn;
};

var isColor = function isColor(value) {
  try {
    (0, _chromaJs2['default'])(value);
    return true;
  } catch (e) {
    return false;
  }
};

var displayAsType = function displayAsType(input) {
  return input.split('|').map(function (x) {
    return x.trim();
  }).map(_swigLibFilters2['default'].capitalize).join('</code> or <code>');
};

var yiq = function yiq(_ref) {
  var _ref2 = _slicedToArray(_ref, 3);

  var red = _ref2[0];
  var green = _ref2[1];
  var blue = _ref2[2];
  return (red * 299 + green * 587 + blue * 114) / 1000;
};

var yiqContrast = function yiqContrast(rgb) {
  return yiq(rgb) >= 128 ? '#000' : '#fff';
};

var getChannel = function getChannel(start, hex) {
  return parseInt(hex.substr(start, 2), 16);
};

var hexToRgb = function hexToRgb(hex) {
  return [0, 2, 4].map(function (x) {
    return getChannel(x, hex);
  });
};

var colorToHex = function colorToHex(color) {
  return (0, _chromaJs2['default'])(color).hex().substr(1);
};

/**
 * Normalises a CSS color, then uses the YIQ algorithm to get the
 * correct contrast.
 *
 * @param {String} color
 * @return {String} `#000` or `#fff` depending on which one is a better.
 * @see {@link http://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area}
 */
var maybeYiqContrast = function maybeYiqContrast(color) {
  return isColor(color) ? yiqContrast(hexToRgb(colorToHex(color))) : '#000';
};

swig.setFilter('in', function (key, object) {
  return key in object;
});
swig.setFilter('is_color', isColor);
swig.setFilter('display_as_type', safe(displayAsType));
swig.setFilter('yiq', maybeYiqContrast);
module.exports = exports['default'];
