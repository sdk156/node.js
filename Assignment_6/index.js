var express=require('express');// importing express web framework
var bodyParser = require('body-parser'); //importing body-parser (to parse the body of http requests)
var cookieParser = require('cookie-parser');// importing cookie-parser (to parse the cookies of http requests) 

//importing custom modules
var library=require('./routes/library'); 
var middleware=require('./controller/services')
myServer=express(); // creating an instance of the server

//implementing middelwares
myServer.use(cookieParser());// to parse cookies in the http request received

myServer.use("/auth",bodyParser.json());// to parse the bosy of the request in json format
//this middelware is used for authenticating users
myServer.use("/auth",(req,res,next)=>{
    let requestBody=req.body;
        if(req.method=='POST'){ // checking only for a POST method
            //validating user credentials using joi implented in the custom module ./controller/services.js
        middleware.joiValidation(requestBody,"/auth",(resp)=>{
            if(resp){
                next();// calling the next method in the hierarchy according to the path

            }else{
                res.send("invalid user credentials");// if joi validation failed, response is as shown

            }
        })
            


        }else{
        res.send('invalid request');// if http method is not POST, the response is returned as shown
    }


});

//this middleware is used for token generation
myServer.use("/auth",(req,res,next)=>{
    // generating a token for user authentication using jsonwebtoken middleware implemented in ./controller/services.js
    let token=middleware.generateJwt(req.body);
    //console.log(token);  
    //storing the access token at the client using the cookies
    res.cookie('access_token',token); //res.cookie(name,value) setting the cookie name and value 
    next();// calling the next method in the hierarchy according to the path

});
// this middelware is used to validate the whether a <number> is given as a parameter in http GET request
myServer.use("/10multiple/:num",(req,res,next)=>{
    // validating using joi implemented in the custom module ./controller/services.js
    middleware.joiValidation(parseInt(req.params.num),"/10multiple",(resp)=>{
        if(resp){
            next();// calling the next method in the hierarchy according to the path
        }else{
            res.send("invalid number"); // invalid parameter, response is sent to the client as described
        }

    });
    

    
});

// this middleware is used to check the cookie value for user authentication
myServer.use("/charAsKey",(req,res,next)=>{
    //console.log(req.cookies);
    // the cookie value is verified using jsonwebtoken module implemented in ./controller/services.js
    middleware.verifyJwt(req.cookies.access_token,(resp)=>{
        if(resp){
            //console.log('token verified successfully');
            next();// calling the next method in the hierarchy according to the path

        }else{
            res.send("authenticated users only");// if invalid token, response is sent as described
        }
    });
 
    

});
myServer.use("/charAsKey",bodyParser.text());// this middleware parses request body as text

//this middleware validates the string
myServer.use("/charAsKey",(req,res,next)=>{
    //string is validated using joi implemented in ./controller/services.js
    //console.log(req.body);
    middleware.joiValidation(req.body,"/charAsKey",(resp)=>{
        if(resp){
            next();// calling the next method in the hierarchy according to the path
        }else{
            res.send("invalid data");//if validation fails, response is sent as described
        }
});
});
myServer.use("/isArmstrong",bodyParser.text());// this middleware parses request body as text

//this middleware checks for user authentication
myServer.use("/isArmstrong",(req,res,next)=>{
        //verifying the token using jsonwebtoken module
        middleware.verifyJwt(req.cookies.access_token,(resp)=>{
            if(resp){
                next();// calling the next method in the hierarchy according to the path
    
                
            }else{
                res.send("authenticated users only");// if token verification fails, response is sent as described
            }
        });

   
    
});

//this middleware validates whether it is a number
myServer.use("/isArmstrong",(req,res,next)=>{
    //validation is done using joi module

    middleware.joiValidation(req.query.num, "/isArmstrong",(resp)=>{
        if(resp){
            next(); // calling the next method in the hierarchy according to the path
        } else{
            res.send("invalid number") // if the number is invalid, response is sent as described
        }

    });
});

// upon successful user authentication, this POST method is handled
myServer.post("/auth",(req,res)=>{
    res.send("user authenticated successfully");
    
});

// handles an empty GET request
myServer.get('/',(req,res)=>{
res.send("Hello DK");
});

//upon successful validation of a number in the specified path, the GET request is processed
myServer.get("/10multiple/:num",(req,res)=>{
    //this function is used to return the first ten multiples of the given number
library.tenMultiples(parseInt(req.params.num),(result)=>{
    res.send(result);

    });
});

//upon successful token verification and data validation, the GET rrequest is handled here
myServer.get("/charAsKey",(req,res)=>{
    //this function returns a json object with characters as key and its occurrence as values
    library.charAsKey(req.body,(result)=>{
        res.send(result);

    });

});

//upon successful token verification and data validation, the GET rrequest is handled here
myServer.get("/isArmstrong",(req,res)=>{
    //this function checks whether the given number is armstrong or not
    library.armstrong(req.query.num,(result)=>{
        if(result){
            res.send("Hurrah! "+req.query.num + " is an Armstrong Number");
            
        }else{
            res.send("Alas, "+req.query.num +" is NOT an Armstrong Number");
        }
       
    });
});

//initializing the server to listen for requests from the specified port id:1656
myServer.listen(1656,()=>{
    console.log("server listening on port 1656");
});

module.exports=myServer;
