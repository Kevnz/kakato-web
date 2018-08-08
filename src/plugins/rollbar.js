const Rollbar = require('rollbar');
const _ = require('lodash');

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});

const register = (server, options) => {
  server.decorate('request', 'logMessage', rollbar.log);
  server.decorate('request', 'logError', rollbar.error);

  const preResponse = (request, h) => {
    const response = request.response;

    if (!response.isBoom) {
      return h.continue;
    }

    const cb = (rollbarErr) => {
      if (rollbarErr) {
        console.log(`Error reporting to rollbar, ignoring: ${rollbarErr}`);
      }
    };

    const error = response;

    if (error instanceof Error) {
      rollbar.error(error, request, cb);
    } else {
      rollbar.error(`Error: ${error}`, request, cb);
    }

    return h.continue;
  };

  server.ext('onPreResponse', preResponse);
  server.expose('rollbar', rollbar);

  console.log('Rollbar: next');
  return Promise.resolve();
};

const name = 'rollbar-reporter';
const version = '1.0.0';
const multiple = false;
const dependencies = '';
const once = true;
const pkg = {};

module.exports = {
  register,
  name,
  version,
  multiple,
  once,
  pkg,
  dependencies
};
