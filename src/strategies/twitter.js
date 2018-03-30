const config = require('xtconf')();

module.exports = {
  provider: 'twitter',
  password: process.env.AUTH_PASSWORD,
  isSecure: false,
  clientId: process.env.TWITTER_ID,
  clientSecret: process.env.TWITTER_SECRET
};
