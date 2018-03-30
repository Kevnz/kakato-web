'use strict';
const React = require('react');

class SecretView extends React.Component {
  render() {
    return <h1>Welcome to the secret plot device.{this.props.name}</h1>;
  }
}

module.exports = SecretView;
