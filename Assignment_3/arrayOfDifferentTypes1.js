//3.Demonstrate an example that shows that array elements can be of different types.

var Array=["Hi",123,1.235,{'name':'dinesh','hobby':'cricket'}];// array with different datatypes
for(let i=0;i<Array.length;i++){
    let k=Array[i];
   // console.log(k);
   if(typeof(k)=="object"){
       console.log("Data: {");
       for(let key in k){
           console.log(key+": "+ k[key]);
       }
       console.log("} Datatype: "+typeof(k));
   }else{
    console.log("Data: "+k+" Datatype: "+typeof(k));// prints data and data type
   }
    
   
}
