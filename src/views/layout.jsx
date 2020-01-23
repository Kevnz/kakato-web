'use strict';
const React = require('react');
const { Button, NavBar, NavBarBrand, NavBarDivider, NavBarDropDown, NavBarEnd, NavBarItem, NavBarStart, NavBarMenu, Buttons } = require('@brightleaf/elements')
const { If, Then, Else } = require('react-if');

const LayoutView = (props) => {


  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="https://unpkg.com/bulmaswatch/litera/bulmaswatch.min.css" />

      </head>
      <body>
        <NavBar isDark>
          <NavBarBrand
            src="/imgs/kakato-logo.png"
            href="#"
            target="navbarBasicExample"
            width="112"
            height="28"
          />
          <NavBarMenu id="navbarBasicExample">
            <NavBarStart>
              <NavBarItem><a>Home</a></NavBarItem>
              <NavBarItem><a>Documentation</a></NavBarItem>
              <NavBarDropDown title="Examples">
                <NavBarItem><a to="/containers">Container</a></NavBarItem>
                <NavBarItem>
                  <a to="/columns">Columns</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/notifications">Notifications</a>
                </NavBarItem>
                <NavBarItem>
                  <a to="/autocomplete">AutoComplete</a>
                </NavBarItem>
                <NavBarDivider />
                <NavBarItem>
                  <a>Report an issue</a>
                </NavBarItem>
              </NavBarDropDown>
            </NavBarStart>

            <NavBarEnd>
              <NavBarItem>
                <div>
                  <If condition={props.isAuthenticated}>
                    <Then>
                      <Button isPrimary isAnchor href="/account">
                        Account
                      </Button>
                    </Then>
                    <Else>
                      {() => (
                        // will only be evaluated if the condition fails.
                        <Buttons>
                          <Button isPrimary isAnchor href="/account/new">
                            <strong>Sign up</strong>
                          </Button>
                          <Button isLight isAnchor href="/login" >
                            Log in
                            </Button>
                        </Buttons>
                      )}
                    </Else>
                  </If>

                </div>
              </NavBarItem>
            </NavBarEnd>
          </NavBarMenu>
        </NavBar>

        <div
          id="content"

        >{props.children}</div>
      </body>
    </html>
  );

}

module.exports = LayoutView;
