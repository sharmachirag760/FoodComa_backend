const AppError = require("./appError");

class InternalServerError extends AppError{
    constructor(properties){
         super(`its not you its our server where something went wrong`,500);

    }
}
module.exports = InternalServerError;