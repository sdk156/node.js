var Joi=require('joi');//importing joi module

var schema= require('./schema');
function validateBody(data,path,callback){
    switch(path){
    case "/auth":
    Joi.validate(data,schema.user,joiCallback);
    break;
    case "/10multiple":
    Joi.validate(data,schema.tenMultipleSchema,joiCallback);
    break;
    case "/charAsKey":
    Joi.validate(data,schema.charAsKeySchema,joiCallback);
    break;
    case "/isArmstrong":
    Joi.validate(data,schema.armstrongSchema,joiCallback);
    break;
    default:
    callback(false);
}
function joiCallback(error,value){
    if(error){
        //console.log("validation not successful");
        callback(false);   
    }else{
        //console.log("validation Successful");
        //console.log(value);
        callback(true);
    }
}






}
//exporting the function
module.exports={
    joiValidation:validateBody
};
