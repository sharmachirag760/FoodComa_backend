const { createcart } = require("../repositories/cartRepository");
const { findUser, createUser } = require("../repositories/userRepository");

async function registerUser(userDetails){
    const user = await findUser({
        email : userDetails.email,
        mobileNumber : userDetails.mobileNumber
    })

    if(user){
        throw{
            reason : 'User with given email and mobile number already exist',
            statuscode : 400
        }
    }
    const newUser = await createUser({
        email : userDetails.email,
        password : userDetails.password,
        firstName : userDetails.firstName,
        lastName : userDetails.lastName,
        mobileNumber : userDetails.mobileNumber
    })
    if(!newUser){
        throw{
            reason : "Something went wrong ",
            statuscode : 500
        }
    }

    await createcart(newUser._id);

    return newUser;

}
module.exports = registerUser