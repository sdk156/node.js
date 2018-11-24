var expect=require('chai').expect; //import the expect property from chai m odule
var library=require('../routes/library');// importing custom modules
var output;// global variable to define the results, hence same callback function can be used 
//tests as follows
describe("check if Armstrong",()=>{
    
    it("should be true for 1634",()=>{
        output=true;
        library.armstrong(1634,callback);
    });
    it('should be false for 100',()=>{
        output=false;
        library.armstrong(100,callback)

    });
});
describe("first 10 multiples of given number",()=>{
    it("should return an array for 5",()=>{
        output=[5,10,15,20,25,30,35,40,45,50];
        library.tenMultiples(5,callback);
    });
});

describe("character as key and occurrence as value",()=>{
    it("output is a JSON object",()=>{
        output={
            "l":2,
            "e":1,
            "t":1,
            "\'":1,
            "s":1,
            " ":1,
            "p":1,
            "a":1,
            "y":1,
            "!":1
        };
        library.charAsKey("let's play!",callback);
    });
});

function callback( result){
   expect(result).to.eql(output);
}