//4.Demonstrate the use of callback, i.e both error and success.

//this function checks for an empty string and returns the result in callback
function callbackExplained(string,callback){
if(string){
	 setTimeout(function(){callback(null,string)},3000); //setTimeout is used to generate a async call
}else{
	 setTimeout(function(){callback('empty string',null)},3000);//setTimeout is used to generate a async call
}

}

function stringTest(err,data){
	if(err){
	console.log(err);// if empty string (error)
	}else{
	console.log('given string is: ' + data);// if the string is not an empty string i.e, not equal to NULL (success)
	}
}
callbackExplained(null, stringTest);
callbackExplained('this is a string', stringTest);

//the calls made in line number 20 and 21 are async.
//this can be easily understood from the fact that 
// after a delay of 3 seconds, both results printed simultaneously
