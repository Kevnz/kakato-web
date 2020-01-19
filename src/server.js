require('xtconf')();

const Hapi = require('@hapi/hapi');
const Bell = require('@hapi/bell');
const Path = require('path');
const HapiReactViews = require('hapi-react-views');
const AuthBasic = require('hapi-auth-basic');
const AuthCookie = require('hapi-auth-cookie');
const CorsHeaders = require('hapi-cors-headers');
const Rollbar = require('rollbar');

const Manifest = require('./manifest');
const Updater = require('./services/update-links');

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});
if (process.env.NODE_ENV !== 'production') {
  require('babel-core/register')({ presets: ['react', 'env', 'stage-0'] });
  require('babel-polyfill');
}

const viewPath = Path.join(
  __dirname,
  process.env.NODE_ENV !== 'production' ? 'views' : 'templates'
);
const viewConfig =
  process.env.NODE_ENV !== 'production'
    ? { jsx: HapiReactViews }
    : { js: HapiReactViews };
console.log('viewPath', viewPath);

const server = Hapi.server({
  port: process.env.PORT,
  //host: config.get('host'),
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public')
    },
    cors: {
      origin: ['*'],

      additionalHeaders: ['x-kakato', 'content-type']
    }
  }
});

const start = async () => {
  try {
    // register Bell to have auth schema loaded
    await server.register([AuthCookie, AuthBasic, Bell]);
    server.state('session', {
      ttl: 24 * 60 * 60 * 1000,
      isSecure: false,
      isHttpOnly: false,
      encoding: 'base64json',
      isSameSite: 'Lax',
      clearInvalid: false, // remove invalid cookies
      strictHeader: false // don't allow violations of RFC 6265
    });

    const cache = server.cache({
      segment: 'sessions',
      expiresIn: 3 * 24 * 60 * 60 * 1000
    });
    server.app.cache = cache;

    // set twitte auth strategy for routes and plugins to have available
    server.auth.strategy('twitter', 'bell', require('./strategies/twitter'));

    // set linked in auth strategy for routes and plugins to have available
    server.auth.strategy('linkedin', 'bell', require('./strategies/linkedin'));

    server.auth.strategy(
      'pihikete',
      'cookie',
      require('./strategies/pihikete')(cache)
    );

    server.auth.scheme('maioha', require('./strategies/maioha-scheme'));
    server.auth.strategy('maioha', 'maioha', require('./strategies/maioha'));

    await server.register(Manifest);

    // register view engines
    server.views({
      engines: viewConfig,
      compileOptions: {}, // optional
      relativeTo: __dirname,
      path: process.env.NODE_ENV !== 'production' ? 'views' : 'templates',
      compileOptions: {
        layoutPath: viewPath,
        layout: 'layout'
      }
    });

    server.ext('onRequest', (request, h) => {
      console.log('onRequest');
      return h.continue;
    });
    server.ext('onPreAuth', (request, h) => {
      console.log('onPreAuth', request.state);
      return h.continue;
    });
    server.ext('onCredentials', (request, h) => {
      console.log('onCredentials');
      return h.continue;
    });
    server.ext('onPostAuth', (request, h) => {
      console.log('onPostAuth');
      return h.continue;
    });

    server.ext('onPreHandler', (request, h) => {
      console.log('onPreHandler');
      return h.continue;
    });
    server.ext('onPostHandler', (request, h) => {
      console.log('onPostHandler');
      return h.continue;
    });
    server.ext('onPreResponse', (request, h) => {
      console.log('onPreResponse');
      return h.continue;
    });

    //start server
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('🚀 Server running at:', server.info.uri);
  Updater()
    .then(() => {
      console.info('updated');
    })
    .catch((err) => {
      console.error('updater error', err);
      rollbar.error(err);
    });
};

process.on('SIGINT', async () => {
  console.log('stopping server');
  try {
    await server.stop({ timeout: 10000 });
    console.log('hapi server stopped 🛑');
    process.exit(0);
  } catch (err) {
    console.error('shutdown error', err);
    process.exit(1);
  }
});

start();
