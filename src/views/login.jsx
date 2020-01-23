'use strict';
const React = require('react');
const { Section, Container, Title } = require('@brightleaf/elements')
const Layout = require('./layout')
class LoginView extends React.Component {
  render() {
    return (
      <Layout>
        <Section>
          <Container>
            <form method="POST" className="form">
              <fieldset>
                <legend><Title>Login</Title></legend>
                <br />

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input name="email" className="input" type="text" placeholder="Email" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input name="password" className="input" type="password" placeholder="Password" />
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <input type="submit" className="button is-link is-radiusless" value="Login" />
                  </div>
                  <div className="control">
                    <button className="button is-radiusless">Cancel</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </Container>
        </Section>
      </Layout>
    );
  }
}

module.exports = LoginView;
