//this file is used for exporting the functions
var dept =function(){
    return "EEE";
};
var university=function(){
return "SASTRA University";

};

var name=function(){
    return"Dinesh Krishna";
};
module.exports={
    name:name,
    university:university,
    department:dept
}
//console.log(exports);