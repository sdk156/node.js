//3.Use fs package to read data from a file and print it, using callback way.


// 'fs' stands for File System
var myFile=require('fs'); //importing the package
//readFile returns two params to callback
// first parameter is error
// second parameter is data in the file
//hence callback follows the same pattern 
myFile.readFile('testFile.txt',function(error,data){
	if(error){
		console.log(error);// prints error if error in reading the file

	}else{
		console.log(data.toString());// prints the file contents upon a successfull read operation

	}
});


