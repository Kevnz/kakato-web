module.exports = async (request, h) => {
  if (!request.auth.isAuthenticated) {
    return null;
  }

  const user = request.auth.credentials;

  return user;
};
