const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/links',
  config: {
    tags: ['api', 'v1'],
    description: 'Links endpoint',
    handler: async (request, h) => {
      try {
        const version = request.pre.apiVersion;
        await request.db.links.find({}).limit(4);
        return h.response({ status: 'up', version });
      } catch (e) {
        request.server.log(e.message);
        return Boom.serverUnavailable('unavailable', e);
      }
    }
  }
};
