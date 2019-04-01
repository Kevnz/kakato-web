const Joi = require('joi');

const LinkOutputSchema = Joi.object()
  .keys({
    id: Joi.string()
      .guid()
      .required()
      .description('Id of the Link')
      .example('bffbd25b-1eb5-4781-adc7-e9f85c4dbf93'),
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
      .description('Array of tags to classify the page'),
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
  })
  .label('link');

module.exports = {
  LinkInputSchema,
  LinkOutputSchema
};
