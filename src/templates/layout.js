'use strict';

const React = require('react');
const { Header, NavigationBar } = require('mini.css-react');
const { If, Then, Else } = require('react-if');
const { Component, Fragment } = React;

class LayoutView extends Component {
  render() {
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
        React.createElement('link', { href: '/mini-dark.css', rel: 'stylesheet' })
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
            'Kakato'
          ),
          React.createElement(
            'a',
            { href: '/', className: 'button' },
            'Home'
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
              () =>
              // will only be evaluated if the condition fails.
              React.createElement(
                Fragment,
                null,
                React.createElement(
                  'a',
                  { href: '/login', className: 'button' },
                  'Login'
                ),
                React.createElement(
                  'a',
                  { href: '/account/new', className: 'button' },
                  ' ',
                  'Register',
                  ' '
                )
              )
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
}

module.exports = LayoutView;