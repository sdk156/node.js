// 3.Demonstrate the use of JWT (both token creation and verification)


var jwt=require('jsonwebtoken'); // importing jwt module
// predefined set of data for data verification
var data=[{
    "username":"dinesh",
    "password":"12345"
},
{
    "username":"krishna",
    "password":"12395"
},
{
    "username":"shalinidk",
    "password":"15697"
},
{
    "username":"dhivya",
    "password":"17896"
}];
var userData1={// invalid username and password
    "username":"hello",
    "password":"hi"
};
var userData2={// one of the predefined sets of data
    "username":"krishna",
    "password":"12395"
};
var signature="thisIsAkey";
var token=tokenGenerator(userData1);// unsuccessfull token generation
console.log(token);
tokenValidator(token,signature);
token=tokenGenerator(userData2);// successfull token generation
console.log(token);
tokenValidator(token,signature);

//assuming the object parameter has required schema, the function parameter is checked against a given set of data 
function verifyData(obj){
    
    let state=false;
   
for(let position in data){// iterating through array index from 0 to n-1
    let credential=data[position];
       if(obj.username==credential.username && obj.password==credential.password){
        state=true;
        return state;
    
    }else{
        continue;
    }
    
}
return state;
}
//this function genaerates the token
function tokenGenerator(obj){
if(verifyData(obj)){
    let jsonWebToken=jwt.sign(obj,"thisIsAkey");
    return jsonWebToken; 
}else{
    return "invalid user credentials";
}
}
// this function validates the token
function tokenValidator(token,signature){
    jwt.verify(token,signature,(err,data)=>{
        if(err){
            console.log("invalid signature or token");
        }
        else{
            console.log("token verified successfully");
            console.log(data);
        }

    });

}
