const Order = require("../schema/orderSchema")

async function createNewOrder(orderDetails){
     try {
        const order = await Order.create(orderDetails);
        return order; 
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
module.exports = {
    createNewOrder
}