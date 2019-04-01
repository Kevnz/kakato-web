/*
Session from cache
*/

console.log('process.env.AUTH_PASSWORD', process.env.AUTH_PASSWORD)
module.exports = (cache) => ({

  cookie: {
    isSecure: false,
    name: 'pihikete',
    password: process.env.AUTH_PASSWORD,
  },
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
