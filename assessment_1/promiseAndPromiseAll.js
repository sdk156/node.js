//2.Demonstrate the use of Promise and Promise.all with the help of a function

//promise and promise.all()
//promise.all() - if one of the promise gets rejected, the whole set of promises are rejected

// here, valid strings are handled by resolve method
//empty strings are handled by reject method

function prom(string){
	
	return new Promise(function(resolve,reject){
	if(string){
	resolve(string);
	}else{
	reject('empty string');
	}

	});
	
}
var result = prom('tester').then(res => {
	console.log(res);// prints 'tester'
}).catch(res => {
	console.log(res);
});

console.log(result,'unsuccessful');// unsuccessful log of 'result'

//promise.all() 

var arr=[prom('hi'),prom('hello'),prom('how are you')];

// this call to Promise.all() is provided with three calls as defined below.
// arr has three calls to prom with valid non empty strings
// expected output ['hi','hello,'how are you']

var results = Promise.all(arr).then(res => {
	console.log(res); //prints ['hi','hello,'how are you']
}).catch(res => {
	console.log(res);
});

// this call to Promise.all() is provided with three calls as defined below.
// arr has three calls to prom with one invalid empty string
// expected output 'empty string' i.e, a single output , since one of them is rejected, every promise is rejected

var arr1=[prom('hi'),prom(),prom('how how')];
var results1 = Promise.all(arr1).then(res => {
	console.log(res);
}).catch(res => {
	console.log(res); //prints 'empty string'
});
