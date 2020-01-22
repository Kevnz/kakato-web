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

class HomeView extends Component {
  render() {
    const links = this.props.links.map((link, index) => (
      <li key={`link-key-${index}`}>
        <a href={link.url}>{link.name}</a>
        <a href={`/read/${link.id}`}>Read</a>
        <If condition={link.tweetedOn === undefined}>
          <Then>
            <form
              method="POST"
              action={`/tweet/${link.id}`}
              style={{ margin: 0, border: 0, padding: 0, boxShadow: 'none' }}
            >
              <Button type="submit" className="small">
                Tweet
              </Button>
            </form>
          </Then>
          <Else>
            {() => (
              // will only be evaluated if the condition fails.
              <div>
                Tweeted{' '}
                <Time
                  value={link.tweetedOn}
                  titleFormat="YYYY/MM/DD HH:mm"
                  relative
                />
              </div>
            )}
          </Else>
        </If>
      </li>
    ));
    return (
      <GridColumn
        small={{ width: 12, order: 'first' }}
        medium={{ width: 8, offset: 0 }}
        large={{ width: 'fluid', offset: 0, order: 'normal' }}
      >
        <GridRow>
          <Card className="large">
            <If condition={this.props.isAuthenticated}>
              <Then>
                <Section>Links</Section>
                <Section>
                  <ul>{links}</ul>
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
          </Card>
        </GridRow>
      </GridColumn>
    );
  }
}

module.exports = HomeView;
