const express = require('express');
const Router = express.Router();
const PaymentOptionController = require('../controllers/Payment');
const catchAsync = require('../utils/catchAsync')

Router.post('/payment-option', catchAsync(PaymentOptionController.setPaymentOption));

module.exports = Router;