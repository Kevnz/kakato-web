const Twitter = require('twitter');

module.exports = (userProfile) => {
  const client = new Twitter({
    consumer_key: process.env.TWITTER_ID,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token_key: userProfile.profile.token,
    access_token_secret: userProfile.profile.secret
  });

  return client;
};
