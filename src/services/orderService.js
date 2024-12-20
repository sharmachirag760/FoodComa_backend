const { getCartByUserId, clearCart } = require('../repositories/cartRepository');
const notFoundError = require('../utils/notFoundError');
const badRequestError = require('../utils/badRequest');
const { findUser } = require('../repositories/userRepository');
const { createNewOrder } = require('../repositories/orderRepository');
const InternalServerError = require('../utils/internalServerError');
async function createOrder(userId,paymentMethod){
      const cart = await getCartByUserId(userId);
      const user = await findUser({ _id : cart.user})
      if(!cart){
        throw new notFoundError("Cart")
      }
      if(cart.items.length ===0){
        throw new badRequestError(["Cart is empty, please add some items to the cart "])
      }
      const orderObject = {}; 
      orderObject.user = cart.user;
      orderObject.items = cart.items.map(cartItem => {
           return { product : cartItem.product._id, quantity : cartItem.quantity }
      });
      orderObject.status = "ORDERED";
      orderObject.totalPrice = 0;
      cart.items.forEach((cartItem)=>{
             orderObject.totalPrice += cartItem.quantity * cartItem.product.price;
      })
      orderObject.address = user.address;
      orderObject.paymentMethod = paymentMethod; 
      const order = await createNewOrder(orderObject );
      if(!order){
        throw new InternalServerError();
      }
    await clearCart(userId);
    return order;
}
module.exports ={
   createOrder
}
