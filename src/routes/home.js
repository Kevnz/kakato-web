const db = require('../services/db');

module.exports = [
  {
    method: 'GET',
    path: '/',
    config: {
      auth: { strategy: 'pihikete', mode: 'optional' },
      pre: [{ method: require('../pre-handlers/get-links'), assign: 'links' }],
      handler: (request, h) => {
        const value = request.state;
        request.bang(`on home route session ${JSON.stringify(value, null, 4)}`);

        return h.view('home', {
          title: 'Kakato - Scrumptious Links',
          isAuthenticated: request.auth.isAuthenticated,
          links: request.pre.links
        });
      }
    }
  },
  {
    method: 'GET',
    path: '/secret',
    config: {
      auth: { strategy: 'pihikete' },
      handler: (request, h) => {
        console.log('request.auth.credentials', request.auth.credentials);
        return h.view('secret', {
          title: 'Secret Page',
          isAuthenticated: request.auth.isAuthenticated,
          name: `${request.auth.credentials.firstName} ${request.auth.credentials.lastName}`
        });
      }
    }
  },
  {
    method: 'GET',
    path: '/mini.css',
    config: {
      handler: {
        file: 'mini.css'
      }
    }
  },
  {
    method: 'GET',
    path: '/read.css',
    config: {
      handler: {
        file: 'read.css'
      }
    }
  },
  {
    method: 'GET',
    path: '/mini-dark.css',
    config: {
      handler: {
        file: 'mini-dark.css'
      }
    }
  },
  {
    method: 'GET',
    path: '/css/{path*}',
    handler: { directory: { path: './' } }
  },
  {
    method: 'GET',
    path: '/imgs/{path*}',
    handler: { directory: { path: './' } }
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: { directory: { path: './' } }
  },
  {
    method: 'GET',
    path: '/robots.txt',
    config: {
      handler: {
        file: 'robots.txt'
      }
    }
  },
  {
    method: 'GET',
    path: '/read/{linkId}',
    config: {
      auth: { strategy: 'pihikete', mode: 'optional' },
      pre: [{ method: require('../pre-handlers/get-link'), assign: 'link' }],
      handler: (request, h) => {
        const value = request.state;
        request.bang(`on home route session ${JSON.stringify(value, null, 4)}`);
        console.info('read', request.pre.link);
        return h.view('read', {
          title: 'Kakato - Scrumptious Links',
          isAuthenticated: request.auth.isAuthenticated,
          link: request.pre.link
        });
      }
    }
  }
];
