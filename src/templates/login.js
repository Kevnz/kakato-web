'use strict';

const React = require('react');
const { InputGroup } = require('mini.css-react');

class LoginView extends React.Component {
  render() {
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
}

module.exports = LoginView;