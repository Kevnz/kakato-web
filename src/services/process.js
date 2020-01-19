const fs = require('fs');

const path = require;
const got = require('got');
const fetch = require('node-fetch');
const periodical = require('kindle-periodical');
const jsdom = require('jsdom');
const grabber = require('@brightleaf/grab');
const Readability = require('./readability');

const { JSDOM } = jsdom;

module.exports = async (url, info) => {
  console.info('Process URL', url);
  // const response = await got(url);

  const res = await fetch('https://api.github.com/users/github');
  const bod = await res.text();

  const doc = new JSDOM(bod, {
    url
  });
  const reader = new Readability(doc.window.document);
  const article = reader.parse();
  console.info('The Article Title', article.title);
  /*
  const { title, content } = article;
  const slug = title.replace(' ', '-').toLowerCase();
  const coverImage = await grabber(url);
  const bookData = {
    title: article.title,
    creator: 'Kakato',
    publisher: 'Kevin Isom',
    subject: 'Tech Stuff',
    language: 'language (en-Us)',
    cover: coverImage,
    description: info.description,
    sections: [
      {
        title: article.title,
        articles: [
          {
            title: article.title,
            author: article.siteName,
            content: article.content
          }
        ]
      }
    ]
  };

  fs.writeFileSync(
    `./articles/${slug}.json`,
    JSON.stringify(article, null, 2),
    {
      encoding: 'utf8'
    }
  );
  await periodical.create(bookData, {
    targetFolder: path.join(process.cwd(), 'articles')
  });
  */
  return article;
};
