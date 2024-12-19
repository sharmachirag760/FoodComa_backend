const AppError = require("./appError");

class UnauthorizedError extends AppError{
    constructor(){
         super(`User is not authorized properly`,401);

    }
}
module.exports = UnauthorizedError;