'use strict';

const React = require('react');

const {
  Card,
  Section,
  Button,
  GridColumn,
  GridRow
} = require('mini.css-react');

const {
  If,
  Then,
  Else
} = require('react-if');

const Time = require('react-time').default;

const {
  Component,
  Fragment
} = React;

class HomeView extends Component {
  render() {
    const links = this.props.links.map((link, index) => React.createElement("li", {
      key: `link-key-${index}`
    }, React.createElement("a", {
      href: link.url
    }, link.name), React.createElement("a", {
      href: `/read/${link.id}`
    }, "Read"), React.createElement(If, {
      condition: link.tweetedOn === undefined
    }, React.createElement(Then, null, React.createElement("form", {
      method: "POST",
      action: `/tweet/${link.id}`,
      style: {
        margin: 0,
        border: 0,
        padding: 0,
        boxShadow: 'none'
      }
    }, React.createElement(Button, {
      type: "submit",
      className: "small"
    }, "Tweet"))), React.createElement(Else, null, () => // will only be evaluated if the condition fails.
    React.createElement("div", null, "Tweeted", ' ', React.createElement(Time, {
      value: link.tweetedOn,
      titleFormat: "YYYY/MM/DD HH:mm",
      relative: true
    }))))));
    return React.createElement(GridColumn, {
      small: {
        width: 12,
        order: 'first'
      },
      medium: {
        width: 8,
        offset: 0
      },
      large: {
        width: 'fluid',
        offset: 0,
        order: 'normal'
      }
    }, React.createElement(GridRow, null, React.createElement(Card, {
      className: "large"
    }, React.createElement(If, {
      condition: this.props.isAuthenticated
    }, React.createElement(Then, null, React.createElement(Section, null, "Links"), React.createElement(Section, null, React.createElement("ul", null, links))), React.createElement(Else, null, () => // will only be evaluated if the condition fails.
    React.createElement(Fragment, null, React.createElement("a", {
      href: "/login",
      className: "button"
    }, "Login"), React.createElement("a", {
      href: "/account/new",
      className: "button"
    }, ' ', "Register", ' ')))))));
  }

}

module.exports = HomeView;