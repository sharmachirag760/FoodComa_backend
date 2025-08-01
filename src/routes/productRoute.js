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
<<<<<<< HEAD
=======
productRouter.get('/:id',getProduct); 
productRouter.delete('/:id', isLoggedIn,
    isAdmin,deleteProduct);
>>>>>>> ec6c44e (updates)
productRouter.get('/', getProducts);
productRouter.put('/:id/quantity', isLoggedIn, isAdmin, updateProductQuantity);
module.exports = productRouter; 