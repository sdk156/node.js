//Print number 1 to 100 without using any loop. 
// this uses recursion and callback to print from 1 to 100 
function noLoop(num,call){
if(num==1){
return call(num);
}else{
noLoop(num-1,call);
return call(num);
}
    
}
function fun(num1){console.log(num1); }//callback function declaration
noLoop(100,fun);// call
