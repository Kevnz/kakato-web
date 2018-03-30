'use strict';

const React = require('react');
const { InputGroup, Button } = require('mini.css-react');

class NewAccountView extends React.Component {
  render() {
    return React.createElement(
      'form',
      { method: 'PUT' },
      React.createElement(
        'fieldset',
        null,
        React.createElement(
          'legend',
          null,
          'Account Details'
        ),
        React.createElement(
          InputGroup,
          { vertical: true },
          React.createElement(
            'label',
            null,
            ' First Name '
          ),
          React.createElement('input', {
            type: 'text',
            name: 'firstName',
            value: this.props.user.firstName
          }),
          React.createElement(
            'label',
            null,
            ' Last Name '
          ),
          React.createElement('input', {
            type: 'text',
            name: 'lastName',
            value: this.props.user.lastName
          }),
          React.createElement(
            'label',
            null,
            ' Email '
          ),
          React.createElement('input', { type: 'text', name: 'email', value: this.props.user.email }),
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
            'Update Account'
          )
        )
      )
    );
  }
}

module.exports = NewAccountView;