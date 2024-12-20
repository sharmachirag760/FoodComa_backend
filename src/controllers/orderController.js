const { createOrder } = require("../services/orderService");
const AppError = require("../utils/appError");

async function createNewOrder(req,res){
    try {
        const order = await createOrder(req.user.id,req.body.paymentMethod);
        return res.status(201).json({
            success : true,
            message : "successfully created the order",
            error : {},
            data : order 
        })
    } catch (error) {
        console.log(error);
        if(error instanceof AppError){
            return res.status(error.statuscode).json({
                success : false,
                message : error.message,
                error : error,
                data : {}
            })
        }
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            error : error,
            data : {}
        })
    }
}
module.exports = {
     createNewOrder
}