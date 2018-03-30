const Boom = require('boom');
const uuidv1 = require('uuid/v1');

const saveDetails = async (request, h, query) => {
  const updateData = Object.assign({}, query, {
    profile: request.auth.credentials
  });

  await request.db.social.update(query, updateData, {
    upsert: true
  });
  const info = await request.db.social.findOne(query);
  return h
    .redirect(`/sync?info=${info._id.toString()}`)
    .state('session', info._id.toString());
};

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/auth/twitter',
    options: {
      auth: 'twitter',
      handler: async (request, h) => {
        if (!request.auth.isAuthenticated) {
          return `Authentication failed due to: ${request.auth.error.message}`;
        }
        request.bang(`request auth ${JSON.stringify(request.auth)}`);
        const value = request.state;

        const user = await request.db.users.findOne({
          id: value ? value.id : 0
        });

        const out = {
          valid: !!user
        };
        if (!out.valid) {
          const query = {
            identifier: request.auth.credentials.profile.username,
            type: 'twitter'
          };
          return saveDetails(request, h, query);
        }
        const query = {
          id: user.id
        };
        const updateData = Object.assign({}, user, {
          twitter: request.auth.credentials.profile
        });
        await request.db.users.update(query, updateData, {
          upsert: true
        });
        return h.redirect('/');
      }
    }
  },
  {
    method: ['GET', 'POST'],
    path: '/auth/linkedin',
    config: {
      auth: 'linkedin',
      handler: async (request, h) => {
        if (!request.auth.isAuthenticated) {
          return `Authentication failed due to: ${request.auth.error.message}`;
        }

        const query2 = {
          provider: 'linkedin',
          identifier: request.auth.credentials.profile.id
        };
        await request.db.linkedin.update(query2, request.auth.credentials, {
          upsert: true
        });
        const query = {
          identifier: request.auth.credentials.profile.id,
          type: 'linkedin'
        };
        return saveDetails(request, h, query);
        return (
          '<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>'
        );
      }
    }
  }
];
