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
    path: '/mini-dark.css',
    config: {
      handler: {
        file: 'mini-dark.css'
      }
    }
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
    path:
      '/.well-known/acme-challenge/MDjOwufrHO1jpRzI8lTRUhAh03W1xh2_eFrrYyLOQCU',
    config: {
      handler: (request, h) => {
        return 'MDjOwufrHO1jpRzI8lTRUhAh03W1xh2_eFrrYyLOQCU.xDFm06YXtA5_KFIUS-nChI4n9AKoEGBuT6Had_eqQ-A';
      }
    }
  }
  //
];
