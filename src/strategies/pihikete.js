/*
Session from cache
*/

module.exports = (cache) => ({
  password: process.env.AUTH_PASSWORD,
  cookie: 'pihikete',
  isSecure: false,

  appendNext: true,
  validateFunc: async (request, session) => {
    const cached = await request.db.sessions.findOne({
      sessionId: session.sid
    });

    const out = {
      valid: !!cached
    };

    if (out.valid) {
      const user = await request.db.users.findOne({ id: cached.userId });
      out.credentials = user;
    }

    return out;
  }
});
