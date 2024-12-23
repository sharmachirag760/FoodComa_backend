const cloudinary = require("../config/cloudinaryConfig");
const productRespository = require('../repositories/productRespository');

const fs = require('fs/promises');
const InternalServerError = require("../utils/internalServerError");
const notFoundError = require("../utils/notFoundError");
async function CreateProduct(productDetails){
   const imagePath = productDetails.imagePath;
   if(imagePath){
    try {
        const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
        var productImage = cloudinaryResponse.secure_url; 
        await fs.unlink(imagePath )
    } catch (error) {
        console.log(error)
        throw new InternalServerError()
    }
   
   }
   const product = await productRespository.createProduct({
         ...productDetails,
         productImage : productImage
   })
   if(!product){
    throw{ reason : "not able to create product",statuscode : 500 }
   }
   return product;
}

async function getProductById(productId){
    const response = await productRespository.getProductById(productId);
    if(!response){
        throw new notFoundError('product');
    }
    return response;
}
async function getAllProductsData() {
    const response = await ProductRespository.getAllProducts();
    if(!response) {
        throw new NotFoundError('Product');
    }
    return response;
}
async function deleteProductById(productId){
    const response = await productRespository.deleteProductById(productId);
    if(!response){
        throw new notFoundError('product')
    }
    return response;
}
module.exports = {
    CreateProduct,
    deleteProductById,
    getProductById,
    getAllProductsData
};