const jwt = require('jsonwebtoken');
const { JWT_SECRET, COOKIE_SECURE, FRONTEND_URL } = require('../config/ServerConfig');
const UnauthorizedError = require('../utils/unauthorizedError');
async function isLoggedIn(req,res,next){
    console.log("Inside isLoggedIn");
    const token =
  req.cookies.authToken ||
  (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")
    ? req.headers.authorization.split(" ")[1]
    : null);
    console.log(token);
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
        console.log(decoded, decoded.exp, Date.now() / 1000);
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
        console.log(error.name);
        if(error.name === "TokenExpiredError") {
            res.cookie("authToken", "", {
                httpOnly: true,
                sameSite: "lax",
                secure: COOKIE_SECURE,
                maxAge: 7 * 24 * 60 * 60 * 1000,
                domain: FRONTEND_URL
            });
            return res.status(200).json({
                success: true,
                message: "Log out successfull",
                error: {},
                data: {}
            });
        }
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