"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ArrowDown = function ArrowDown(props) {
  return _react.default.createElement("svg", _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 267 396"
  }, props), _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenOdd"
  }, _react.default.createElement("g", {
    fill: "currentColor",
    fillRule: "nonzero"
  }, _react.default.createElement("path", {
    d: "M133.089769,0 C125.743526,0 119.781358,5.95466667 119.781358,13.2916667 L119.781358,355.453771 L22.9493576,253.918729 C17.8855072,248.608708 9.46793707,248.389396 4.13126417,253.460167 C-1.19210031,258.524292 -1.39838068,266.931271 3.67212399,272.247938 L114.265021,388.211083 C119.295601,393.235333 125.976423,396 133.089769,396 C140.19646,396 146.883937,393.235333 152.134105,387.978479 L262.50076,272.247938 C267.571264,266.931271 267.35833,258.524292 262.041619,253.460167 C256.724909,248.389396 248.300685,248.602063 243.23018,253.918729 L146.39818,355.879104 L146.39818,13.2916667 C146.39818,5.95466667 140.436012,0 133.089769,0 Z",
    id: "ArrowDown"
  }))));
};

var _default = ArrowDown;
exports.default = _default;