const Boom = require('boom');
const scheme = (server, options) => {
  return {
    api: {
      settings: {}
    },
    authenticate: async (request, h) => {
      const token = request.headers['x-kakato'];
      const user = await request.db.users.findOne({
        id: token
      });

      if (!user) {
        throw Boom.unauthorized(null, 'Nope');
      }

      return h.authenticated({ credentials: user });
    }
  };
};

module.exports = scheme;
