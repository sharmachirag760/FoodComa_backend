const { findUser } = require("../repositories/userRepository");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRY } = require("../config/ServerConfig");
async function loginUser(authDetails){
    const email = authDetails.email;
    const plainPassword = authDetails.password;
    
    const user = await findUser({email});
    if(!user){
        throw{
            message : "no user found with the given email",
            statuscode : 404
        }
    }
    const isPasswordValidated = bcrypt.compareSync(plainPassword,user.password); 
    if(!isPasswordValidated){
        throw{
            message : "Invalid password, please try again !!",
            statuscode : 401
        }
    }
    const token = jwt.sign({emai : user.email,id : user._id},JWT_SECRET, {expiresIn : JWT_EXPIRY})
    return token;
}
module.exports = {
    loginUser
}