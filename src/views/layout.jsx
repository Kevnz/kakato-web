'use strict';
const React = require('react');
const { Header, NavigationBar } = require('mini.css-react');
const { If, Then, Else } = require('react-if');
const { Component, Fragment } = React;

class LayoutView extends Component {
  render() {
    //console.log('the laout props', this.props);
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href="/mini-dark.css" rel="stylesheet" />
        </head>
        <body>
          <Header sticky>
            <a href="#" logo>
              Kakato
            </a>
            <a href="/" className="button">
              Home
            </a>
            <If condition={this.props.isAuthenticated}>
              <Then>
                <span>
                  <a href="/account" className="button">
                    Account
                  </a>
                  <a href="/auth/twitter" className="button">
                    Twitter
                  </a>
                  <a href="/auth/linkedin" className="button">
                    LinkedIn
                  </a>
                </span>
              </Then>
              <Else>
                {() => (
                  // will only be evaluated if the condition fails.
                  <Fragment>
                    <a href="/login" className="button">
                      Login
                    </a>
                    <a href="/account/new" className="button">
                      {' '}
                      Register{' '}
                    </a>
                  </Fragment>
                )}
              </Else>
            </If>
          </Header>
          <div
            id="content"
            dangerouslySetInnerHTML={{ __html: this.props.children }}
          />
        </body>
      </html>
    );
  }
}

module.exports = LayoutView;
