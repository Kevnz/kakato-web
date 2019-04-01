'use strict';

const React = require('react');

class SecretView extends React.Component {
  render() {
    return React.createElement("h1", null, "Welcome to the secret plot device.", this.props.name);
  }

}

module.exports = SecretView;