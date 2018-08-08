'use strict';
const React = require('react');
const { InputGroup } = require('mini.css-react');

class LoginView extends React.Component {
  render() {
    return (
      <form method="POST">
        <fieldset>
          <legend> Login</legend>

          <InputGroup>
            <label> Email </label>
            <input type="text" name="email" />
          </InputGroup>
          <InputGroup>
            <label> Password </label>
            <input type="password" name="password" />
          </InputGroup>
          <InputGroup>
            <input type="submit" value="Login" />
          </InputGroup>
        </fieldset>
      </form>
    );
  }
}

module.exports = LoginView;
