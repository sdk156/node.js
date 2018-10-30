//6. Demonstrate the use of chance, your system should always return a object where values for its keys are random.
//Object should have at least these keys name, age, email, subjects, cgpa.



var ChancePackage=require('chance');
var Chance= new ChancePackage();
// function returnRandomObj(){
//     let obj={
//         //'name':Chance.string({pool:'abcdefghijklmnopqrstuvwxyz'}),
//         'age':Chance.integer({min:17,max:30}),
//         'email':Chance.email(),
//         'subjects':Chance.unique(Chance.string({pool:'asdfghjkl'}),4),
//         'CGPA':Chance.floating({min:0,max:10})

//     }
//     return obj;

// }
// for(let i=1;i<5;i++){
    
//     console.log(returnRandomObj());
// }
var p=Chance.string({pool:'abcdefghijklmnopqrstuvwxyz'});
console.log(p);
var obj={
            'name':Chance.string({pool:'abcdefghijklmnopqrstuvwxyz'}),
            'age':Chance.integer({min:17,max:30}),
            'email':Chance.email(),
            // 'subjects':Chance.unique(Chance.string({pool:'asdfghjkl'}),4),
            'CGPA':Chance.floating({min:0,max:10})
    
        };