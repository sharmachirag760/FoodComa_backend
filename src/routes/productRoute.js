const express = require('express');
const { addProduct } = require('../controllers/productController');
const { uploader } = require('../middlewares/multerMidddleware');
const productRouter = express.Router();
productRouter.post('/',uploader.single('productImage'),addProduct );
module.exports = productRouter; 