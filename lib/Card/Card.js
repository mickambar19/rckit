"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  padding: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardStyled = _styledComponents.default.div(_templateObject(), function (_ref) {
  var flat = _ref.flat;
  return !flat && '10px';
}, function (_ref2) {
  var flat = _ref2.flat;
  return !flat && '5px';
}, function (_ref3) {
  var theme = _ref3.theme,
      elevation = _ref3.elevation;
  return theme.shadows[elevation];
});

var Card = function Card(props) {
  return _react.default.createElement(CardStyled, props);
};

Card.defaultProps = {
  flat: false,
  elevation: 1
};
Card.propTypes = {
  flat: _propTypes.default.bool,
  elevation: _propTypes.default.number
};
var _default = Card;
exports.default = _default;