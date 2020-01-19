const { each } = require('@kev_nz/async-tools');
const { db } = require('./db');
const process = require('./process');

module.exports = async () => {
  const links = await db.links.find({
    content: { $exists: false }
  });

  await each(links, async (link) => {
    console.info('read', link.url);
    console.info('link', JSON.stringify(link, null, 2));
    const read = await process(link.url, link);
    await db.links.save(Object.assign({}, link, read));
  });
};
