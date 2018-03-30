module.exports = {
  method: 'GET',
  path: '/sync',
  config: {
    auth: { strategy: 'pihikete', mode: 'try' },
    handler: async (request, h) => {
      const socialId = request.query.info;

      console.log('socialId', socialId);
      const socialQuery = {
        _id: request.ObjectId(socialId)
      };
      const socialInfo = await request.db.social.findOne(socialQuery);

      console.log('social info from q', socialInfo);
      console.log('auth creds', request.state.session);

      //set something when ready
      const sessionQuery = {
        sessionId: request.state.session
      };
      console.log(sessionQuery);
      const sesh = await request.db.sessions.findOne(sessionQuery);
      console.log('session', sesh);
      socialInfo.userId = sesh.userId;

      await request.db.social.update(socialQuery, {
        $set: { userId: sesh.userId }
      });
      return h.redirect('/');
    }
  }
};
