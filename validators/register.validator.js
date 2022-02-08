const Joi = require('joi');

const registerSchema = Joi.object({
    first_name: Joi.string().min(1).required(),
    last_name: Joi.string().min(1).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),    
});

module.exports = registerSchema;