const Boom = require('boom');
const Uuid = require('uuid/v1');
const { LinkOutputSchema, LinkInputSchema } = require('../../schemas/link');

const process = require('../../services/process');

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/links',
    config: {
      auth: 'maioha',
      tags: ['api', 'v1', 'links'],
      description: 'Get all the links for a user',
      response: {
        schema: LinkOutputSchema
      },
      handler: async (request, h) => {
        const links = await request.db.links.find({
          userId: request.auth.credentials
        });

        return links;
      }
    }
  },
  {
    method: 'GET',
    path: '/api/v1/links/{linkId}',
    config: {
      auth: 'maioha',
      tags: ['api', 'v1', 'links'],
      description: 'Get all the links for a user',
      response: {
        schema: LinkOutputSchema
      },
      handler: async (request, h) => {
        const link = await request.db.links.findOne({
          id: request.params.linkId
        });

        return link;
      }
    }
  },
  {
    method: 'POST',
    path: '/api/v1/links',
    config: {
      cors: { origin: 'ignore' },
      tags: ['api', 'v1', 'links'],
      description: 'Add a link for the user',
      auth: 'maioha',
      validate: {
        payload: LinkInputSchema,
        failAction: 'log'
      },
      response: {
        schema: LinkOutputSchema,
        failAction: 'log'
      },
      handler: async (request, h) => {
        const user = request.auth.credentials;

        const { name, url, tags, description } = request.payload;
        console.info('payload', request.payload);
        const linkToSave = {
          id: Uuid(),
          name,
          url,
          tags,
          description,
          userId: user.id
        };
        const readable = await process(url, linkToSave);
        const saved = await request.db.links.save({...linkToSave, ...readable);
        console.info('Link Saved response', saved);

        return h.response(saved);
      }
    }
  }
];
