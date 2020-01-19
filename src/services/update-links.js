const { each } = require('@kev_nz/async-tools');
const { db } = require('./db');
const process = require('./process');

module.exports = async () => {
  const links = await db.links.find({
    content: { $exists: false }
  });

  await each(links, async (link) => {
    const read = await process(link.url, link);
    await db.links.save(Object.assign({}, link, read));
  });
};
