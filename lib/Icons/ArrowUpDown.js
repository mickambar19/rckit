"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ArrowUpDown = function ArrowUpDown(props) {
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
    d: "M134.089769,0 C141.19646,0 147.883937,2.76466667 153.134105,8.02152083 L263.50076,123.752063 C268.571264,129.068729 268.35833,137.475708 263.041619,142.539833 C257.724909,147.610604 249.300685,147.397938 244.23018,142.081271 L147.39818,40.1208958 L147.39818,305.708333 C147.39818,306.439729 147.338932,307.157388 147.224972,307.856782 L147.224299,355.879104 L244.056299,253.918729 C249.126804,248.602062 257.551028,248.389396 262.867738,253.460167 C268.184449,258.524292 268.397383,266.931271 263.326879,272.247937 L152.960224,387.978479 C147.710056,393.235333 141.022579,396 133.915888,396 C126.802542,396 120.12172,393.235333 115.09114,388.211083 L4.49824299,272.247937 C-0.572261682,266.931271 -0.365981308,258.524292 4.95738318,253.460167 C10.2940561,248.389396 18.7116262,248.608708 23.7754766,253.918729 L120.607477,355.453771 L120.607477,90.2916667 C120.607477,89.5581761 120.667064,88.838501 120.781665,88.1372098 L120.781358,40.5462292 L23.9493576,142.081271 C18.8855072,147.391292 10.4679371,147.610604 5.13126417,142.539833 C-0.192100311,137.475708 -0.398380685,129.068729 4.67212399,123.752063 L115.265021,7.78891667 C120.295601,2.76466667 126.976423,0 134.089769,0 Z"
  }))));
};

var _default = ArrowUpDown;
exports.default = _default;