/*
maioha (noun) affectionate greeting, token of regard.

Tohaina atu rā ēnei maioha, ēnei kupu whakamihi āku, a Te Taiti Te Tomo, ki ngā iwi o Te Tai Rāwhiti (TTT 1/4/1930:2035).
Distribute these affectionate greetings, these words of thanks of mine, of Te Taite Te Tomo, to the peoples of the East Coast.

*/

module.exports = {
  password: process.env.AUTH_PASSWORD,
  isSecure: false,
  validateFunc: async (request, session) => {
    const token = request.headers['x-kakato'];
    const user = await request.db.users.findOne({
      id: token
    });
    const out = {
      valid: !!user
    };

    if (out.valid) {
      out.credentials = user;
    }
    return out;
  }
};
