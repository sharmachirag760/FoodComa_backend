const { findUser, createUser } = require("../repositories/userRepository");

async function registerUser(userDetails) {
    const user = await findUser({
      $or: [
        { email: userDetails.email },
        { mobileNumber: userDetails.mobileNumber }
      ]
    });
  
    if (user) {
      throw {
        message: "User with given email or mobile number already exists",
        statuscode: 400
      };
    }
  
    const newUser = await createUser({
      email: userDetails.email,
      password: userDetails.password,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      role: userDetails.role,
      mobileNumber: userDetails.mobileNumber
    });
  
    if (!newUser) {
      throw {
        message: "Something went wrong",
        statuscode: 500
      };
    }
  
    return newUser;
  }
module.exports = registerUser