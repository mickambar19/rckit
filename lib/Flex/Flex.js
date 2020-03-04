"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexStyled = _styledComponents.default.div.withConfig({
  displayName: "Flex__FlexStyled",
  componentId: "sc-1u8uoeu-0"
})(["display:", ";flex-basis:", ";flex-grow:", ";flex-shrink:", ";flex-wrap:", ";flex-direction:", ";justify-content:", ";align-items:", ";"], function (_ref) {
  var container = _ref.container,
      inline = _ref.inline;
  return container && 'flex' || inline && 'inline-flex';
}, function (_ref2) {
  var theme = _ref2.theme,
      col = _ref2.col;
  var flexBasis = col ? !isNaN(col) ? "".concat(col / theme.flexColumns * 100, "%") : col : '';
  return flexBasis;
}, function (_ref3) {
  var grow = _ref3.grow,
      col = _ref3.col;

  if (grow === undefined) {
    if (!col) return;else grow = 0;
  }

  if (col === 'auto') return 1;
  return grow ? 1 : 0;
}, function (_ref4) {
  var shrink = _ref4.shrink,
      col = _ref4.col;

  if (shrink === undefined) {
    if (!col) return;else shrink = 1;
  }

  if (col === 'auto') return 0;
  return shrink ? 1 : 0;
}, function (_ref5) {
  var container = _ref5.container,
      inline = _ref5.inline;
  return container || inline ? 'wrap' : '';
}, function (_ref6) {
  var direction = _ref6.direction;
  return direction === 'none' ? '' : direction;
}, function (_ref7) {
  var direction = _ref7.direction,
      justify = _ref7.justify,
      align = _ref7.align,
      center = _ref7.center;
  return center && 'center' || (direction === 'row' ? justify : align);
}, function (_ref8) {
  var direction = _ref8.direction,
      align = _ref8.align,
      justify = _ref8.justify,
      center = _ref8.center;
  return center && 'center' || (direction === 'row' ? align : justify);
});

var Flex = function Flex(props) {
  return _react.default.createElement(FlexStyled, props);
};

Flex.defaultProps = {
  direction: 'row'
};
Flex.propTypes = {
  container: _propTypes.default.bool,
  inline: _propTypes.default.bool,
  col: _propTypes.default.number,
  grow: _propTypes.default.number,
  shrink: _propTypes.default.number,
  direction: _propTypes.default.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  justify: _propTypes.default.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'space-between', 'space-around', 'space-evenly']),
  align: _propTypes.default.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch', 'space-between', 'space-around', 'space-evenly'])
};
var _default = Flex;
exports.default = _default;