//5.Demonstrate the use of module.exports/exports/require
console.log(exports===module.exports);// true
//require is used to get the objcet of the module.exports of the file specified
var mod=require("./exportingFile.js");
console.log(mod.name()); //executes name method
console.log(mod.department()); //executes dept method
console.log(mod.university()); //executes university method
