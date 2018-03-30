'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('mini.css-react'),
    Header = _require.Header,
    NavigationBar = _require.NavigationBar;

var _require2 = require('react-if'),
    If = _require2.If,
    Then = _require2.Then,
    Else = _require2.Else;

var LayoutView = function (_React$Component) {
  _inherits(LayoutView, _React$Component);

  function LayoutView() {
    _classCallCheck(this, LayoutView);

    return _possibleConstructorReturn(this, (LayoutView.__proto__ || Object.getPrototypeOf(LayoutView)).apply(this, arguments));
  }

  _createClass(LayoutView, [{
    key: 'render',
    value: function render() {
      //console.log('the laout props', this.props);
      return React.createElement(
        'html',
        null,
        React.createElement(
          'head',
          null,
          React.createElement(
            'title',
            null,
            this.props.title
          ),
          React.createElement('link', { href: '/mini.css', rel: 'stylesheet' })
        ),
        React.createElement(
          'body',
          null,
          React.createElement(
            Header,
            { sticky: true },
            React.createElement(
              'a',
              { href: '#', logo: true },
              'AkJS'
            ),
            React.createElement(
              'a',
              { href: '/', className: 'button' },
              'Home'
            ),
            React.createElement(
              'a',
              { href: '/secret', className: 'button' },
              'Secret'
            ),
            React.createElement(
              If,
              { condition: this.props.isAuthenticated },
              React.createElement(
                Then,
                null,
                React.createElement(
                  'span',
                  null,
                  React.createElement(
                    'a',
                    { href: '/account', className: 'button' },
                    'Account'
                  ),
                  React.createElement(
                    'a',
                    { href: '/auth/twitter', className: 'button' },
                    'Twitter'
                  ),
                  React.createElement(
                    'a',
                    { href: '/auth/linkedin', className: 'button' },
                    'LinkedIn'
                  )
                )
              ),
              React.createElement(
                Else,
                null,
                function () {
                  return (
                    // will only be evaluated if the condition fails.
                    React.createElement(
                      'a',
                      { href: '/login', className: 'button' },
                      'Login'
                    )
                  );
                }
              )
            )
          ),
          React.createElement('div', {
            id: 'content',
            dangerouslySetInnerHTML: { __html: this.props.children }
          })
        )
      );
    }
  }]);

  return LayoutView;
}(React.Component);

module.exports = LayoutView;