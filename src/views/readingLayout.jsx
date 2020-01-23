'use strict';
const React = require('react');

const LayoutView = (props) => {


  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="/read.css" />

      </head>
      <body className="light sans-serif loaded">

        <div
          id="content"

        >{props.children}</div>
      </body>
    </html>
  );

}

module.exports = LayoutView;
