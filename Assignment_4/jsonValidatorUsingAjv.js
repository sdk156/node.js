//1.Demonstrate the use of AJV, validate the JSON which should have at least these keys:-
// name, age, email, subjects, cgpa.

// ex: student = {
// name: ‘test’,
// age: 20,
// email: ‘test@yopmail.com’,
// subjects: [‘A1’, ‘A2’, ‘B1’, ‘B2’],
// cgpa: 8
// };


var AJV=require('ajv');// imports ajv (Another JSON Schema Validator)
var Ajv=new AJV({allErrors: true}); // creating an object
const mySchema={// defining required schema
    "$schema": "http://json-schema.org/schema#",
    "type":"object",
    "properties":{
        "name":{"type":"string"}, 
        "age":{"type":"integer"}, 
        "email":{"type":"string","format":"email"}, 
        "subjects":{
            "type":"array",
            "uniqueItems": true,
            "items":{"type":"string"}
    }, 
        "cgpa":{"type":"number","minimum":0.00,"maximum":10.00}
    },
    "additionalItems": false
}
var data={// test data
    name: 'test',
    age: 20,
    email: 'testyo@pmail.com',
    subjects: ['A1', 'A2', 'B1', 'B2'],
    cgpa: 8.25
    };
    
var ValidatorFunc=Ajv.compile(mySchema);// returns a function to validate the data as per schema specified
var result=ValidatorFunc(data);// if data satisfies the schema ,"true", else "false"
console.log(result);
console.log(ValidatorFunc.errors);// print errors if validation fails. otherwise "null"
