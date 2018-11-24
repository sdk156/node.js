var Joi=require('joi');
const mySchema=Joi.object().keys({
    name:Joi.string().regex(/[a-z]/i).max(40).required(),
    age:Joi.number().min(17).max(25).required(),
    email:Joi.string().email().required(),
    subjects:Joi.array().items(Joi.string().regex(/[a-z]/i)).required(),
    CGPA:Joi.number().min(0).max(10).required()


});

const tenMultipleSchema=Joi.number().required();
const sentenceSchema=Joi.string().required();
const armstrongSchema=Joi.number().required();
//exporting the schemas
module.exports={
    user:mySchema,
    tenMultipleSchema:tenMultipleSchema,
    charAsKeySchema:sentenceSchema,
    armstrongSchema:armstrongSchema
};