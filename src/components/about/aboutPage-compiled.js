'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Since this component is simple and static, there's no parent container for it.
var AboutPage = function AboutPage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      { className: 'alt-header' },
      'About'
    ),
    _react2.default.createElement(
      'p',
      null,
      'About page'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/badlink' },
        'Click this bad link'
      ),
      ' to see the 404 page.'
    )
  );
};

exports.default = AboutPage;

//# sourceMappingURL=AboutPage-compiled.js.map