//6. Demonstrate the use of chance, your system should always return a object where values for its keys are random.
//Object should have at least these keys name, age, email, subjects, cgpa.
// 6. Demonstrate the use of chance, your system should always return a object where values for its keys are random.
// Object should have at least these keys name, age, email, subjects, cgpa.



var ChancePackage=require('chance'); //import chance module
var Chance= new ChancePackage();// create an object to use its member functions

//function which returns random values for the required keys
function returnRandomObj(){
    let obj={
        'name':Chance.string({pool:'abcdefghijklmnopqrstuvwxyz'}),
        'age':Chance.integer({min:17,max:30}),
        'email':Chance.email(),
        'subjects':Chance.unique(Chance.string,4,{pool:'asdfghjkl',length:'10'}),
        'CGPA':Chance.floating({min:0,max:10})

    }
    return obj;

}// this loop returns five random objects
for(let i=1;i<5;i++){
    
    console.log(returnRandomObj());
}
