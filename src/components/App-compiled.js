"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement(
    "div",
    { className: "container-fluid" },
    props.children
  );
};

App.propTypes = {
  children: _react.PropTypes.element
};

exports.default = App;

//# sourceMappingURL=App-compiled.js.map