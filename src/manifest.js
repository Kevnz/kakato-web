const Pack = require('../package.json');

module.exports = [
  {
    plugin: require('blipp')
  },
  {
    plugin: require('@hapi/vision')
  },
  {
    plugin: require('@hapi/inert')
  },
  {
    plugin: require('@hapi/good'),
    options: {
      ops: {
        interval: 30 * 200
      },
      reporters: {
        console: [
          {
            module: '@hapi/good-console',
            args: [{ log: '*', response: '*' }]
          },
          'stdout'
        ]
      }
    }
  },
  {
    plugin: require('hapi-swagger'),
    options: {
      info: {
        title: 'API Documentation',
        version: Pack.version
      }
    }
  },
  {
    plugin: require('hapi-api-version'),
    options: {
      basePath: '/api/',
      validVersions: [1, 2],
      defaultVersion: 1,
      vendorName: 'hapiapi'
    }
  },
  {
    plugin: require('./plugins/db'),
    options: {}
  },
  {
    plugin: require('hapi-router'),
    options: {
      routes: ['src/routes/**/*.js']
    }
  },
  {
    plugin: require('./plugins/bang'),
    options: {}
  },
  {
    plugin: require('./plugins/rollbar'),
    options: {}
  }
];
