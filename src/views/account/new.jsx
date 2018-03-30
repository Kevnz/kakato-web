'use strict';
const React = require('react');
const { InputGroup, Button } = require('mini.css-react');

class NewAccountView extends React.Component {
  render() {
    return (
      <form method="POST">
        <fieldset>
          <legend>Create Account</legend>
          <InputGroup vertical>
            <label> First Name </label>
            <input type="text" name="firstName" />

            <label> Last Name </label>
            <input type="text" name="lastName" />

            <label> Email </label>
            <input type="text" name="email" />

            <label> Password </label>
            <input type="password" name="password" />

            <label> Confirm Password </label>
            <input type="password" name="confirmPassword" />
          </InputGroup>
          <div className="button-group">
            <Button type="submit">Create Account</Button>
          </div>
        </fieldset>
      </form>
    );
  }
}

module.exports = NewAccountView;
