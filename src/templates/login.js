'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('mini.css-react'),
    InputGroup = _require.InputGroup;

var LoginView = function (_React$Component) {
  _inherits(LoginView, _React$Component);

  function LoginView() {
    _classCallCheck(this, LoginView);

    return _possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).apply(this, arguments));
  }

  _createClass(LoginView, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { method: 'POST' },
        React.createElement(
          'fieldset',
          null,
          React.createElement(
            'legend',
            null,
            ' Login'
          ),
          React.createElement(
            InputGroup,
            null,
            React.createElement(
              'label',
              null,
              ' Email '
            ),
            React.createElement('input', { type: 'text', name: 'email' })
          ),
          React.createElement(
            InputGroup,
            null,
            React.createElement(
              'label',
              null,
              ' Password '
            ),
            React.createElement('input', { type: 'password', name: 'password' })
          ),
          React.createElement(
            InputGroup,
            null,
            React.createElement('input', { type: 'submit', value: 'Login' })
          )
        )
      );
    }
  }]);

  return LoginView;
}(React.Component);

module.exports = LoginView;