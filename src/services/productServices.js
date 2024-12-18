const cloudinary = require("../config/cloudinaryConfig");
const productRespository = require('../repositories/productRespository');

const fs = require('fs/promises');
async function CreateProduct(productDetails){
   const imagePath = productDetails.imagePath;
   if(imagePath){
    try {
        const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
        var productImage = cloudinaryResponse.secure_url; 
        await fs.unlink(imagePath )
    } catch (error) {
        console.log(error)
        throw{ reason : "not able to create product",statuscode : 500 }
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
module.exports = {CreateProduct};