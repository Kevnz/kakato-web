'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('mini.css-react'),
    InputGroup = _require.InputGroup,
    Button = _require.Button;

var NewAccountView = function (_React$Component) {
  _inherits(NewAccountView, _React$Component);

  function NewAccountView() {
    _classCallCheck(this, NewAccountView);

    return _possibleConstructorReturn(this, (NewAccountView.__proto__ || Object.getPrototypeOf(NewAccountView)).apply(this, arguments));
  }

  _createClass(NewAccountView, [{
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
            'Create Account'
          ),
          React.createElement(
            InputGroup,
            { vertical: true },
            React.createElement(
              'label',
              null,
              ' First Name '
            ),
            React.createElement('input', { type: 'text', name: 'firstName' }),
            React.createElement(
              'label',
              null,
              ' Last Name '
            ),
            React.createElement('input', { type: 'text', name: 'lastName' }),
            React.createElement(
              'label',
              null,
              ' Email '
            ),
            React.createElement('input', { type: 'text', name: 'email' }),
            React.createElement(
              'label',
              null,
              ' Password '
            ),
            React.createElement('input', { type: 'password', name: 'password' }),
            React.createElement(
              'label',
              null,
              ' Confirm Password '
            ),
            React.createElement('input', { type: 'password', name: 'confirmPassword' })
          ),
          React.createElement(
            'div',
            { className: 'button-group' },
            React.createElement(
              Button,
              { type: 'submit' },
              'Create Account'
            )
          )
        )
      );
    }
  }]);

  return NewAccountView;
}(React.Component);

module.exports = NewAccountView;