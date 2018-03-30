const Joi = require('joi');

const LinkOutputSchema = Joi.object()
  .keys({
    id: Joi.string()
      .guid()
      .required()
      .description('Id of the Link')
      .example(1),
    name: Joi.string()
      .required()
      .description('name of the link')
      .example(
        'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more'
      ),
    url: Joi.string()
      .uri()
      .required()
      .description('The URL of the site')
      .example('https://www.amazon.com'),
    description: Joi.string()
      .description('description of the link')
      .example('This is a website that has a lot of items for sale'),
    tags: Joi.array()
      .items(Joi.string())
      .description('Array of tags to classify the page')
      .example('shopping, store, purchase'),
    createdOn: Joi.date().default(Date.now, 'time of link was created'),
    updatedOn: Joi.date().default(Date.now, 'time of link was last edited')
  })
  .label('link');

const LinkInputSchema = Joi.object()
  .keys({
    name: Joi.string()
      .required()
      .description('name of the link')
      .example(
        'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more'
      ),
    url: Joi.string()
      .uri()
      .required()
      .description('The URL of the site')
      .example('https://www.amazon.com'),
    description: Joi.string()
      .description('description of the link')
      .example('This is a website that has a lot of items for sale'),
    tags: Joi.array()
      .items(Joi.string())
      .description('Array of tags to classify the page')
      .example('shopping, store, purchase')
  })
  .label('link');

module.exports = {
  LinkInputSchema,
  LinkOutputSchema
};
