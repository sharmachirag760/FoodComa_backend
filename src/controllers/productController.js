const { CreateProduct, getAllProductsData, UpdateProductQuantity } = require("../services/productServices");
const AppError = require("../utils/appError");
async function addProduct(req,res){
    try {
        const product = await CreateProduct({
            productName : req.body.productName,
            type : req.body.type,
            sku : req.body.sku,
            productImageUrl : req.body.productImageUrl,
            description : req.body.description,
            quantity :  req.body.quantity,
            price : req.body.price,
        })
        return res.status(201).json({
            success : true,
            message : "successfully created the product",
            error : {},
            data : product
        }) 
    } catch (error) {
        if(error instanceof AppError){
            return res.status(error.statuscode).json({
                success : false,
                message : error.message,
                data : {},
                error : error
            })
        }
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            data : {},
            error : error
        })
       
    }
   
}
async function getProducts(req, res) {
    try {
        const response = await getAllProductsData();;
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched the product',
            error: {},
            data: response
        })
    } catch (error) {
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        });
    }
}




async function updateProductQuantity(req, res) {
    try {
        const { quantity } = req.body;
        const { id } = req.params;

        if (quantity === undefined) {
            return res.status(400).json({
                success: false,
                message: "Quantity is required in the request body",
                data: {},
                error: { reason: "Missing quantity field" }
            });
        }

        const updatedProduct = await UpdateProductQuantity(id, quantity);

        return res.status(200).json({
            success: true,
            message: "Product quantity updated successfully",
            data: updatedProduct,
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statuscode || 500).json({
            success: false,
            message: "Failed to update product quantity",
            data: {},
            error: error
        });
    }
}

module.exports = {
    addProduct,
    getProducts,
    updateProductQuantity
}