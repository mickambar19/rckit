"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PencilUnderline = function PencilUnderline(props) {
  return _react.default.createElement("svg", _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 479 479"
  }, props), _react.default.createElement("path", {
    fill: "currentColor",
    d: "M375.4,456.8H34.9c-10.4,0-18.9-9.5-18.9-21.2s8.5-21.2,18.9-21.2h340.5c10.4,0,18.9,9.5,18.9,21.2S385.9,456.8,375.4,456.8z"
  }), _react.default.createElement("path", {
    fill: "currentColor",
    d: "M91.3,373.8c-3.6,0-7.2-1.4-9.8-3.9c-3.4-3.2-4.8-7.9-3.7-12.4l20.1-81.4c0.6-2.4,1.9-4.6,3.7-6.3L355.8,27.1c15.6-14.9,43-15,58.7,0L440.6,52c7.8,7.5,12.1,17.4,12.1,28c0,10.6-4.3,20.5-12.1,28L186.4,350.7c-1.8,1.7-4.1,3-6.6,3.5l-85.3,19.2C93.4,373.7,92.4,373.8,91.3,373.8z M176.6,341.4h0.2H176.6z"
  }));
};

PencilUnderline.propTypes = {};
var _default = PencilUnderline;
exports.default = _default;