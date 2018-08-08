'use strict';
const React = require('react');
const { InputGroup, Button } = require('mini.css-react');

class NewAccountView extends React.Component {
  render() {
    return (
      <form method="PUT">
        <fieldset>
          <legend>Account Details</legend>
          <InputGroup vertical>
            <label> First Name </label>
            <input
              type="text"
              name="firstName"
              value={this.props.user.firstName}
            />

            <label> Last Name </label>
            <input
              type="text"
              name="lastName"
              value={this.props.user.lastName}
            />

            <label> Email </label>
            <input type="text" name="email" value={this.props.user.email} />

            <label> Password </label>
            <input type="password" name="password" />

            <label> Confirm Password </label>
            <input type="password" name="confirmPassword" />
          </InputGroup>
          <div className="button-group">
            <Button type="submit">Update Account</Button>
          </div>
        </fieldset>
      </form>
    );
  }
}

module.exports = NewAccountView;
