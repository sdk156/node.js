var jwt=require('jsonwebtoken');
function generateJWT(requestBody){
    let jsonWebToken=jwt.sign(requestBody,"atHn-umoTnQ0^yt&");
    return jsonWebToken;

}
function verifyJWT(token,callback){
    let key="atHn-umoTnQ0^yt&";// a random 128 bit key
    jwt.verify(token,key,(err,data)=>{
        if(err){
            // console.log("invalid signature or token");
            callback(false);
        }
        else{
            // console.log("token verified successfully");
            // console.log(data);
            callback(true);
        }

    })

}
//exporting the functions
module.exports={
    generateJwt:generateJWT,
    verifyJWT:verifyJWT
}
