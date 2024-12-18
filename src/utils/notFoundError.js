const AppError = require("./appError");

class notFoundError extends AppError{
    constructor(properties){
         let notFoundProperties = "";
         properties.forEach(properties => notFoundProperties += `${property},`);
         super(`not able to find properties ${notFoundProperties } for the resource ${resource}`,404);

    }
}
module.exports = notFoundError;