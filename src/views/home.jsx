'use strict';
const React = require('react');
const {
  Card, CardBody, CardHeader, CardFooter, CardFooterItem, CardImage, Content, Title, SubTitle,
  Section,
  Button,
  Columns,
  Column
} = require('@brightleaf/elements');
const Layout = require('./layout')
const { If, Then, Else } = require('react-if');
const Time = require('react-time').default;

const { Component, Fragment } = React;

class HomeView extends Component {
  render() {
    const links = this.props.links.map((link, index) => (<>
      <Card key={`link-key-${index}`}>
        <CardBody>
          <Title as={'p'} is="5">
            {
              link.name
            }
          </Title>
          <SubTitle as="p" is="6">{
              link.excerpt
            }</SubTitle>
        </CardBody>
        <CardFooter>
          <CardFooterItem>
            <p>
              <span>
                <a href={link.url}>View</a>
              </span>
            </p>
          </CardFooterItem>
          <CardFooterItem>
            <p><span><a href={`/read/${link.id}`}>Read</a></span></p>
          </CardFooterItem>
        </CardFooter>
      </Card><br /><br /></>
    ));
    return (<Layout>
      <Columns>
        <Column is="4" offset="4">
          <If condition={this.props.isAuthenticated}>
            <Then>
              <Section>
                {links}
              </Section>
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

        </Column>
      </Columns></Layout>
    );
  }
}

module.exports = HomeView;
