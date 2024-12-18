const { CreateProduct } = require("../services/productServices")
async function addProduct(req,res){
    try {
        const product = await CreateProduct({
            productName : req.body.productName,
            description : req.body.description,
            imagePath : req.file.path,
            price : req.body.price,
            category : req.body.category,
            inStock : req.body.inStock
        })
        return res.status(201).json({
            success : true,
            message : "successfully created the product",
            error : {},
            data : product
        }) 
    } catch (error) {
        console.log(error);
        return res.status(error.statuscode).json({
            success : false,
            message : error.reason,
            data : {},
            error : error
        })
    }
   
}
module.exports = {
    addProduct
}