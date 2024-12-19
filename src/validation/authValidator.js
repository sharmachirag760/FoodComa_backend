const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/ServerConfig');
const UnauthorizedError = require('../utils/unauthorizedError');
async function isLoggedIn(req,res,next){
    const token = req.cookies["authToken"];
    if(!token){
        return res.status(401).json({
            success : false,
            data : {},
            error : "not authenticated",
            message : "No Auth token provided"
        })
    }
    try {
        
        const decoded = jwt.verify(token,JWT_SECRET)
        if(!decoded){
            throw new UnauthorizedError();
        }
        req.user={
            email :decoded.email,
            id : decoded.id,
            role :decoded.role
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success : false,
            data : {},
            error : error,
            message : "Invalid token provided"
        })
    }
}
function isAdmin(req , res, next) {
    const loggedInUser = req.user;
    if(loggedInUser.role === "ADMIN"){
         next();
    }
    else{
        return res.status(401).json({
            success : false,
            data : {},
            message : "You are not authorized for this action",
            error : {
                statuscode : 401,
                reason : "Unauthorized User for this action"
            }
    
        })
    }
   
}
module.exports = {
    isLoggedIn,
    isAdmin
}