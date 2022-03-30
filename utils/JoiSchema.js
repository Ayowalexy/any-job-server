const Joi = require('joi');


const schema = Joi.object({
    accommodation_status: Joi
        .string(),
        // .required(),
    request_amount: Joi
        .number()
        .min(0),
        // .required(),
    monthly_earning: Joi
        .number()
        .min(0),
        // .required(),
    monthly_payment_plan: Joi
        .string() 
        // .required()
        
})

module.exports = schema