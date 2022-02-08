const Joi = require('joi');

const shortenSchema = Joi.object({
    longUrl: Joi.string().min(5).uri().required(),
    token: Joi.string().min(5).optional(),
});

module.exports = shortenSchema;