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

const ReaderView = ({
  link
}) => {
  function createMarkup() {
    return {
      __html: link.content
    };
  }

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
  }, link.name), React.createElement("div", {
    dangerouslySetInnerHTML: createMarkup()
  })));
};

module.exports = ReaderView;