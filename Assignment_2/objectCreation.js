//1.Illustrate creation of Object using different possible ways.

//object creation using object literal
var obj={
    "name":"dinesh",
    "dept":"EEE",
    "univ":"SASTRA"

};
console.log(obj);

//object creation using new keyword
var newObj=new Object();
newObj.name="dinesh";
newObj.dept="EEE";
newObj.univ="SASTRA";
console.log(newObj);

//object creation using Object.create
var ob=Object.create(Object.prototype,{
    name:{
        value:"dinesh",
        writable:true,
        configurable:false,
        enumerable:true

    },
    dept:{
        value:"EEE",
        writable:true,
        configurable:false,
        enumerable:true

    },
    univ:{
        value:"SASTRA",
        writable:true,
        configurable:false,
        enumerable:true

    }
});
console.log(ob);


//object creation using constructor function
function ObjCreator(){
    this.name="dinesh";
    this.dept="EEE";
    this.univ="SASTRA";
}
var objUsingConstructor= new ObjCreator();
console.log(objUsingConstructor);

//object creation using class

class usingClass{
    constructor(n,d,u){
        
    this.name=n;
    this.dept=d;
    this.univ=u;

    }
}
var objUsingClass= new usingClass("dinesh","EEE","SASTRA");
console.log(objUsingClass);