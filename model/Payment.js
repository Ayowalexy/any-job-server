const mongoose = require('mongoose');


const PaymentSchema = new mongoose.Schema({
    status: {
        type: String,
        // required: true
    },
    request_amount: {
        type: Number,
        // required: true
    },
    monthly_earning: {
        type: Number,
        // required: true
    },
    payment_plan: {
        type: String,
        // required: true
    },
    monthly_payment: {
        type: Number,
    }
})

module.exports = mongoose.model("Payment", PaymentSchema)