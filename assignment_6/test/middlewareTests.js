var expect=require('chai').expect;// importing expect library from chai assertion library
var middleware=require('../controller/services');// importing custom module which contains the middleware implementations
var output;// global variable to define the outputs, hence same callback function is used to define the results
var userData={// input data for user validation
    "name":"Dinesh Krishna",
    "age":21,
    "email":"dineshkrishna1997@gmail.com",
    "subjects":["node","iot","sensors","mcu"],
    "CGPA":7.59
};

// tests as follows
describe("token generation and verification",()=>{
    it("valid token should return true",()=>{
        
        output=true;
        let token = middleware.generateJwt(userData);
        middleware.verifyJwt(token,callback);


    });
    it("invalid token should return false",()=>{
        let invalidToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGluZXNoIEtyaXNobmEiLCJhZ2UiOiIyMSIsImVtYWlsIjoiZGluZXNoa3Jpc2huYTE5OTdAZ21pYWwuY29tIiwic3ViamVjdHMiOlsibm9kZSIsImlvdCIsInNlbnNvcnMiLCJtY3UiXSwiQ0dQQSI6IjcuNTkiLCJpYXQiOjE1NDI5NTM2MDF9.IS1RN4YpsIiJrAoSGmf8lGFxDyPmHS1P-nU";
        output=false;
        middleware.verifyJwt(invalidToken,callback);

    });

});
describe("joi validation",()=>{
    it("valid user data should return true",()=>{
        output=true;
        middleware.joiValidation(userData,"/auth",callback);
    });
    it("invalid user data should return false",()=>{
        output=false;
        let invalidData={
            "name":"Dinesh",
            "age":"21"
        }
        middleware.joiValidation(invalidData,"/auth",callback);
    });
    it("valid number should return true",()=>{
        output=true;
        let number=10;
        middleware.joiValidation(number,"/10multiple",callback);
    });
    it("invalid number should return false",()=>{
        output=false;
        let inValidNumber="ji";
        middleware.joiValidation(inValidNumber,"/10multiple",callback);
    });
    it("valid string should return true",()=>{
        output=true;
        let string="let's play"
        middleware.joiValidation(string,"/charAsKey",callback);
    });
    it("invalid string should return false",()=>{
        output=false;
        let invalidString=100
        middleware.joiValidation(invalidString,"/charAsKey",callback);
    });
    it("valid number should return true",()=>{
        output=true;
        let number=1634;
        middleware.joiValidation(number,"/isArmstrong",callback);
    });
    it("invalid number should return false",()=>{
        output=false;
        let invalidNumber="dk";
        middleware.joiValidation(invalidNumber,"/isArmstrong",callback);
    });
    it("invalid path should also return false",()=>{
        output=false;
        middleware.joiValidation("some data","/invalidPath",callback);
    });

});

function callback(result){
    expect(result).to.eql(output);
}