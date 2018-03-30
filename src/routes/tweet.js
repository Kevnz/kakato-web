module.exports = {
  method: 'POST',
  path: '/tweet/{linkId}',
  config: {
    auth: 'pihikete',
    pre: [
      [
        {
          method: require('../pre-handlers/get-user-from-session'),
          assign: 'user'
        },
        {
          method: require('../pre-handlers/get-link'),
          assign: 'link'
        }
      ],
      [
        {
          method: require('../pre-handlers/get-twitter-for-user'),
          assign: 'profile'
        }
      ]
    ],
    description: 'Post a link to twitter',
    handler: async (request, h) => {
      const link = request.pre.link;
      console.log('pre', request.pre);
      const twitter = require('../services/tweeter')(request.pre.profile);

      const tweetResult = await twitter.post('statuses/update', {
        status: `${link.description} ${link.url}`
      });
      console.log('tweet result', tweetResult);
      link.tweetedOn = new Date();
      await request.db.links.update(
        {
          id: link.id
        },
        link
      );
      return h.redirect('/');
    }
  }
};
