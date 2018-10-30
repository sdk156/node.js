// 4.Demonstrate the use of JOI. validate the JSON which should have at least these keys:-
// name, age, email, subjects, cgpa.

// ex: student = {
// name: ‘test’,
// age: 20,
// email: ‘test@yopmail.com’,
// subjects: [‘A1’, ‘A2’, ‘B1’, ‘B2’],
// cgpa: 8
// };


var Joi=require('joi');// import joi module
// define schema using Joi methods
const mySchema=Joi.object().keys({
    name:Joi.string().regex(/[a-z]/i).max(40).required(),
    age:Joi.number().min(17).max(25).required(),
    email:Joi.string().email().required(),
    subjects:Joi.array().items(Joi.string().regex(/[a-z]/i)).required(),
    CGPA:Joi.number().min(0).max(10).required()


});
//data to be validated
var testData={// test data
    name: 'test',
    age: 20,
    email: 'testyo@pmail.com',
    subjects: ['A1', 'A2', 'B1', 'B2'],
    CGPA: 8.25
    };
    var testData1={// test data
        name: 'test1',
        age: 20,
        email: 'testyopmail.com',// not a valid email
        subjects: ['A1', 'A2', 'B1', 'B2'],
        CGPA: 8.25
        };
        //validating test data
    Joi.validate(testData,mySchema, result);
    Joi.validate(testData1,mySchema, result);


    
    
    function result(error, value){
        if(error){
            console.log("validation not successful");
            //console.log(error);    
        }else{
            console.log("validation Successful");
            console.log(value);
        }

    }
    