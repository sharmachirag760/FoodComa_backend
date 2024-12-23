const express = require('express');
const { addProduct, getProduct, deleteProduct,getProducts } = require('../controllers/productController');
const { uploader } = require('../middlewares/multerMidddleware');
const { isAdmin, isLoggedIn } = require('../validation/authValidator');
const productRouter = express.Router();
productRouter.post(
    '/',
    isLoggedIn,
    isAdmin,
    uploader.single('productImage'),
    addProduct 
 );
productRouter.get('/:id',getProduct); 
productRouter.delete('/:id',deleteProduct);
productRouter.get('/', getProducts);

module.exports = productRouter; 