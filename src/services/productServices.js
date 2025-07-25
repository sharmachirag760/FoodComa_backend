const productRespository = require('../repositories/productRespository');
const fs = require('fs/promises');
const notFoundError = require("../utils/notFoundError");
async function CreateProduct(productDetails){
   const product = await productRespository.createProduct(productDetails)
   if(!product){
    throw{ reason : "not able to create product",statuscode : 500 }
   }
   return product;
}
async function getAllProductsData() {
    const response = await productRespository.getAllProducts();
    if(!response) {
        throw new notFoundError('Product');
    }
    return response;
}


async function UpdateProductQuantity(productId, quantity) {
    const updatedProduct = await productRespository.updateProductQuantity(productId, quantity);
    if (!updatedProduct) {
        throw { reason: "Product not found or quantity update failed", statuscode: 404 };
    }
    return updatedProduct;
}

module.exports = {
    CreateProduct,
    getAllProductsData,
    UpdateProductQuantity
};