const mongoose = require('mongoose');
const Payment = require('../model/Payment');
const schema = require('../utils/JoiSchema');
const jwt = require('jsonwebtoken');


module.exports.setPaymentOption = async(req, res, next) => {

    
    // monthly_payment
    try {
        console.log(req.body)
        schema.validate(req.body);
        const newPaymentOption = new Payment({...req.body.paymentOption})
        await newPaymentOption.save();

        const token = jwt.sign({id: newPaymentOption._id}, 'secretkey');

        res.status(200).json({token, message: "ok"})


    } catch(err){
        next(err)
    }
}