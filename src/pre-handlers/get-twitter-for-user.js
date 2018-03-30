module.exports = async (request, h) => {
  console.log('social id', request.pre.user.socialId);
  const profile = await request.db.social.findOne({
    userId: request.pre.user.id,
    type: 'twitter'
  });
  console.log('profile', profile);

  return profile;
};
