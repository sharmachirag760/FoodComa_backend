const registerUser = require('../services/userService');
async function createUser(req,res){
    console.log("Create user controller called..");
    console.log(req.body)
    try {
    const response = await registerUser(req.body);
    return res.json({ 
        message : 'Successfully registered the user',
        success : true,
        data : response,
        error : {}
    })
    } catch (error) {
        return res.status(error.statuscode).json({
            success : false,
            message : error.reason,
            data : {},
            error : error 
        })
    }
    
}
module.exports = {
    createUser
}