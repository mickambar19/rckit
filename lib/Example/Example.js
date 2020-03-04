"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _StyledDiv = _styledComponents.default.div.withConfig({
  displayName: "Example___StyledDiv",
  componentId: "z3f7yp-0"
})(["width:50px;border:1px solid gray;background:red;border-radius:5px;"]);

// import PropTypes from 'prop-types'
var Example = function Example(props) {
  return _react.default.createElement(_StyledDiv, null, "hola");
};

Example.propTypes = {};
var _default = Example;
exports.default = _default;