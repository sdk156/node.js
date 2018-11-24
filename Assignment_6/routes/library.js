//importing the custom modules
var tenMultiple=require('./tenMultiples');
var charAsKey=require('./charAsKey');
var armstrong=require('./armstrong');

//exporting the functions from all the custom  modules
module.exports={
    tenMultiples:tenMultiple.tenMultiples,
    charAsKey:charAsKey.occurence,
    armstrong:armstrong.isArmstrong

};