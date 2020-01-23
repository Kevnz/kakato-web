'use strict';
const React = require('react');
const {
  Container, Section, Title, SubTitle
} = require('@brightleaf/elements');
const { If, Then, Else } = require('react-if');
const Time = require('react-time').default;
const ReadingLayout = require('./readingLayout')
const { Component, Fragment } = React;

const ReaderView = ({ link }) => {
  function createMarkup() {
    return { __html: link.content };
  }
  return (
    <ReadingLayout>
      <div className="header reader-header reader-show-element">
        <a className="domain reader-domain" href={link.url}>View</a>
        <div className="domain-border"></div>
        <h1 className="reader-title">{link.name}</h1>
        <div className="credits reader-credits">{link.byline}</div>
        <div className="meta-data">

        </div>
      </div>
      <div className="content">

        <div dangerouslySetInnerHTML={createMarkup()} id="readInner" className="moz-reader-content line-height4 reader-show-element" />

      </div>
    </ReadingLayout>
  );
}


module.exports = ReaderView;
