module.exports = async (request, h) => {
  if (!request.auth.isAuthenticated) {
    return [];
  }

  const user = request.auth.credentials;
  const links = await request.db.links.find({
    userId: user.id
  });
  return links;
};
