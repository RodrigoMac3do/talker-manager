const joi = require('joi');
const joiDate = require('@joi/date');

const Joi = joi.extend(joiDate);

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'O campo "email" é obrigatório',
    'string.email': 'O "email" deve ter o formato "email@email.com"',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'O campo "password" é obrigatório',
    'string.min': 'O "password" deve ter pelo menos 6 caracteres',
    'string.empty': 'Some required fields are missing',
  }),
});

const talkerSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'any.required': 'O campo "name" é obrigatório',
    'string.min': 'O "name" deve ter pelo menos 3 caracteres',
  }),
  age: Joi.number().integer().min(18).required()
    .messages({
      'any.required': 'O campo "age" é obrigatório',
      'number.min': 'A pessoa palestrante deve ser maior de idade',
    }),
  talk: Joi.object({
      watchedAt: Joi.date().format('DD/MM/YYYY').required().messages({
        'any.required': 'O campo "watchedAt" é obrigatório',
        'date.format': 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
      }),

      rate: Joi.number()
        .integer()
        .min(1)
        .max(5)
        .messages({
          'any.required': 'O campo "rate" é obrigatório',
          'number.min': 'O campo "rate" deve ser um inteiro de 1 à 5',
          'number.max': 'O campo "rate" deve ser um inteiro de 1 à 5',
        })
        .required(),
    })
    .required()
    .messages({
      'any.required': 'O campo "talk" é obrigatório',
    }),
});

module.exports = {
  loginSchema,
  talkerSchema,
};