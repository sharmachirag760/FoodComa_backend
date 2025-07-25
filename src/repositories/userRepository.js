const User = require("../schema/userSchema");
const BadRequestError = require("../utils/badRequest");
const InternalServerError = require("../utils/internalServerError");
async function findUser(parameters){
    try {
    const response = await User.findOne({...parameters});
    return response;
    } catch (error) {
        console.log(error)
    }
    
}
async function createUser(userDetails){
    try {
        const response = await User.create(userDetails);
        return response;
    } catch (error) {
        if(error.name === 'ValidationsError'){
            const errorMessageList = Object.keys(error.errors).map((property) => {
                return error.errors[property].message;
            })
            console.log(errorMessageList)
            throw new BadRequestError();
        }
        // console.log(error); 
        throw new InternalServerError();
    }
}

module.exports = {
    findUser,
    createUser
}