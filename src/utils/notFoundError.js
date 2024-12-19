const AppError = require("./appError");

class notFoundError extends AppError{
    constructor(properties){
         super(`not able to find ${properties}`,404);

    }
}
module.exports = notFoundError;