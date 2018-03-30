module.exports = async (request, h) => {
  const sessionQuery = {
    sessionId: request.state.session
  };
  console.log(sessionQuery);
  const sesh = await request.db.sessions.findOne(sessionQuery);
  console.log('session', sesh);
  const user = await request.db.users.findOne({
    id: sesh.userId
  });
  return user;
};
