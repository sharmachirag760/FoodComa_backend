const express = require('express');
const { addProduct, getProducts, updateProductQuantity } = require('../controllers/productController');
const { isAdmin, isLoggedIn } = require('../validation/authValidator');
const productRouter = express.Router();
productRouter.post(
    '/',
    isLoggedIn,
    isAdmin,
    addProduct 
 );
productRouter.get('/', getProducts);
productRouter.put('/:id/quantity', isLoggedIn, isAdmin, updateProductQuantity);
module.exports = productRouter; 