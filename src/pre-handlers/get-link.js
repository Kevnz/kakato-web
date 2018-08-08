module.exports = async (request, h) => {
  const { linkId } = request.params;
  const link = await request.db.links.findOne({ id: linkId });
  return link;
};
