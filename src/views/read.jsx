'use strict';
const React = require('react');
const {
  Card,
  Section,
  Button,
  GridColumn,
  GridRow
} = require('mini.css-react');
const { If, Then, Else } = require('react-if');
const Time = require('react-time').default;

const { Component, Fragment } = React;

const ReaderView = ({ link }) => {
  function createMarkup() {
    return {__html: link.content };
  }
    return (
      <GridColumn
        small={{ width: 12, order: 'first' }}
        medium={{ width: 8, offset: 0 }}
        large={{ width: 'fluid', offset: 0, order: 'normal' }}
      >
        <GridRow>
          <Card className="large">
             {link.name}
          </Card>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </GridRow>
      </GridColumn>
    );
  }


module.exports = ReaderView;
