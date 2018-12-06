var bluebird=require('bluebird'); //importing the promise module bluebird
var asyncFile=bluebird.promisifyAll(require('fs'),{suffix:'sdk'});// importing file package for checking the promisifyall and asynchronous calls for whole package
//a sample test function in node style i.e., last argument as callback function
function test(data,callback){
    if(data!=undefined){
        callback(null,data)
    }else{
        callback('error');
    }

}
//  callback function in node style i.e, first argument as error and second as response data
function callback(err,res){
    if(err){
        console.log('callback error');
    }else{
        console.log('callback success');
    }
}
var promisifiedTest=bluebird.promisify(test); // converting test function to return a promise using bluebird
//checking for rejection
promisifiedTest('should resolve').then(()=>{
     console.log('call 1 resolved');
}).catch(()=>{
    console.log('call 1 rejected');
});
// checking for resolving
promisifiedTest().then(()=>{
    console.log('call 2 resolved');
}).catch(()=>{
   console.log('call 2 rejected');
});

//testing the promisified function with suffix as 'sdk'
//successful file read
asyncFile.readFilesdk('testFile.txt','utf-8').then((data)=>{
console.log('read file 1',data);
}).catch((err)=>{
    console.log('read file 1',err);
});

//invalid file Read as the file not present
asyncFile.readFilesdk('testFile1.txt','utf-8').then((data)=>{
    console.log('read file 2',data);
    }).catch((err)=>{
        console.log('read file 2',err.cause);
    });

//hash.map is used for promisifying an array of functions and resembles promises.all
//i.e.,result would be resolved only when all promises are resolved
//expected output success
var arrayOfFunctions=[promisifiedTest,asyncFile.readFilesdk];
bluebird.map(arrayOfFunctions, function(fun) {
    //return fs.readFileAsync(fileName);
     fun('testFile.txt');
}).then(function(data) {
    console.log('promise map success');
}).catch((err)=>{
    console.log('promise map error',err);
});
