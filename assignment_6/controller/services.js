// var Joi=require('joi'); //importing joi module
// var jwt=require('jsonwebtoken'); // importing jwt module
//import custom modules based on the above modules
var joiValidate=require('./joiValidation');
// var schemas=require('./schema');
var jwtToken=require('./jwt');

//exporting the functions from all the imported custom modules
module.exports={
    joiValidation:joiValidate.joiValidation,
    generateJwt:jwtToken.generateJwt,
    verifyJwt:jwtToken.verifyJWT

};