'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('mini.css-react'),
    Card = _require.Card,
    Section = _require.Section,
    Button = _require.Button,
    GridColumn = _require.GridColumn,
    GridRow = _require.GridRow;

var _require2 = require('react-if'),
    If = _require2.If,
    Then = _require2.Then,
    Else = _require2.Else;

var Time = require('react-time').default;
console.log(Time);

var HomeView = function (_React$Component) {
  _inherits(HomeView, _React$Component);

  function HomeView() {
    _classCallCheck(this, HomeView);

    return _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).apply(this, arguments));
  }

  _createClass(HomeView, [{
    key: 'render',
    value: function render() {
      var links = this.props.links.map(function (link, index) {
        return React.createElement(
          'li',
          { key: 'link-key-' + index },
          React.createElement(
            'a',
            { href: link.url },
            link.name
          ),
          React.createElement(
            If,
            { condition: link.tweetedOn === undefined },
            React.createElement(
              Then,
              null,
              React.createElement(
                'form',
                {
                  method: 'POST',
                  action: '/tweet/' + link.id,
                  style: { margin: 0, border: 0, padding: 0, boxShadow: 'none' }
                },
                React.createElement(
                  Button,
                  { type: 'submit', className: 'small' },
                  'Tweet'
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
                    'div',
                    null,
                    'Tweeted',
                    ' ',
                    React.createElement(Time, {
                      value: link.tweetedOn,
                      titleFormat: 'YYYY/MM/DD HH:mm',
                      relative: true
                    })
                  )
                );
              }
            )
          )
        );
      });
      return React.createElement(
        GridColumn,
        {
          small: { width: 12, order: 'first' },
          medium: { width: 8, offset: 0 },
          large: { width: 'fluid', offset: 0, order: 'normal' }
        },
        React.createElement(
          GridRow,
          null,
          React.createElement(
            Card,
            { className: 'fluid' },
            React.createElement(
              Section,
              null,
              'Links'
            ),
            React.createElement(
              Section,
              null,
              React.createElement(
                'ul',
                null,
                links
              )
            )
          )
        )
      );
    }
  }]);

  return HomeView;
}(React.Component);

module.exports = HomeView;