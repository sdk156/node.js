//2.Demonstrate the use of prototype.
//Prototype is an object added to each object created  using constructor function
//this helps in adding fields that should be common to all the objects created using the same constructor function
//eg. member function
function prototypeExplain(n,d,u){
    this.name=n;
    this.dept=d;
    this.univ=u;

}
prototypeExplain.prototype.profile=function(){
    return this.name+", "+this.dept+", "+this.univ +" University";
}

// if member functions are included as apart of each object 
//it occupies memory for each object separaterly even though they 
//do the same job for each object
// such member functions are included using prototype object
var obj= new prototypeExplain("Dinesh Krishna","EEE","SASTRA");
var obj1= new prototypeExplain("Bhuvanesh","EIE","Amrita")
console.log(obj);
console.log(obj1);
console.log(obj.profile());
console.log(obj1.profile());
