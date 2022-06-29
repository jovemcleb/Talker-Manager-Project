const Joi = require('joi');

const tokenSchema = Joi.string().length(16).required().messages({ 
  'string.length': 'Token inválido',
  'any.required': 'Token não encontrado',
});

module.exports = {
  tokenSchema,
};