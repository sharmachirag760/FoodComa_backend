const { Product } = require("../schema/productSchema");
const BadRequestError = require("../utils/badRequest");
const InternalServerError = require("../utils/internalServerError");

async function createProduct(productDetails){
    try {
        const response = await Product.create(productDetails);
    return response
    } catch (error) {
        if(error.name === 'ValidationsError'){
            const errorMessageList = Object.keys(error.errors).map((property) => {
                return error.errors[property].message;
            })
            throw new BadRequestError();
        }
        console.log(error); 
        throw new InternalServerError();
    }
}
async function getAllProducts() {
    try {
        const products = await Product.find({});
        return products;
    } catch (error) {
        console.log(error);
        throw new InternalServerError();
    }
}
async function updateProductQuantity(id, quantity) {
    return await Product.findByIdAndUpdate(
        id,
        { quantity: quantity },
        { new: true, runValidators: true }
    );
}


module.exports = {
    createProduct,
    getAllProducts,
    updateProductQuantity
}