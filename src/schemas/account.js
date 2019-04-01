const Joi = require('joi');

const AccountOutputSchema = Joi.object()
  .keys({
    id: Joi.string()
      .guid()
      .required()
      .description('Id of the Link')
      .example('bffbd25b-1eb5-4781-adc7-e9f85c4dbf93'),
    firstName: Joi.string()
      .required()
      .description('The first name of the user')
      .example('Jane'),
    lastName: Joi.string()
      .required()
      .description('The last name of the user')
      .example('Doe'),
    createdOn: Joi.date().default(Date.now, 'time of link was created'),
    updatedOn: Joi.date().default(Date.now, 'time of link was last edited')
  })
  .label('Account');

const AccountInputSchema = Joi.object()
  .keys({
    firstName: Joi.string()
      .required()
      .description('The first name of the user')
      .example('Jane'),
    lastName: Joi.string()
      .required()
      .description('The last name of the user')
      .example('Doe'),
    password: Joi.string()
      .required()
      .min(8)
      .max(100)
      .description('password for the user')
      .example('fdsjklj3ji34832hjjkdhjsdfglidre'),
    email: Joi.string()
      .email()
      .required()
      .description('Email')
      .example('name@example.com')
  })
  .label('Account');

const accountLoginSchema = Joi.object()
  .keys({
    email: Joi.string()
      .email()
      .required()
      .description('Email')
      .example('name@example.com'),
    password: Joi.string()
      .required()
      .min(8)
      .max(100)
      .description('password for the user')
      .example('fdsjklj3ji34832hjjkdhjsdfglidre')
  })
  .label('Account');
module.exports = {
  AccountInputSchema,
  AccountOutputSchema,
  accountLoginSchema
};
