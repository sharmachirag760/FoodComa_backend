class UserService{

    constructor(_userRepository){
        this.userRepository = _userRepository;
    }
    async registerUser(userDetails){
        const user = await this.userRepository.findUser({
            email : userDetails.email,
            mobileNumber : userDetails.mobileNumber
        })

        if(user){
            throw{
                reason : 'User with given email and mobile number already exist',
                statuscode : 400
            }
        }
        const newUser = await this.userRepository.createUser({
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
        return newUser;

    }
   
}
module.exports = UserService