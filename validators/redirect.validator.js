const Joi = require('joi');


const redirectSchema = Joi.object({
    shortUrl: Joi.string().min(5).uri().required(),
    token: Joi.string().min(5).uri().required()
});

module.exports = redirectSchema;