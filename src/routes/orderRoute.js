const express = require('express');
const { createNewOrder } = require('../controllers/orderController');
const { isLoggedIn } = require('../validation/authValidator');
const orderRouter = express.Router();
orderRouter.post('/',isLoggedIn ,createNewOrder)
module.exports ={
    orderRouter
}