const UserService = require('../services/userService');
const userRepository = require('../repositories/userRepository');
async function createUser(req,res){
    console.log("Create user controller called..");
    console.log(req.body)
    const userService = new UserService(new userRepository());
    try {
    const response = await userService.registerUser(req.body);
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