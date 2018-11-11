//3.Demonstrate prototypical Inheritance

function superSuper(cg){
    this.cgpa=cg;
}
superSuper.prototype.getcgpa=function(){
    return this.cgpa;
}
function superclass(n,d,cg){
    this.dept=d;
    this.name=n;
    superSuper.call(this,cg);

}
superclass.prototype=new superSuper();// inheriting superSuper with super class
superclass.prototype.profile=function(){// a function of super class
    return this.name+", "+this.dept+", ";
}

function subclass(n,d,un,cg){
    this.univ=un;
    superclass.call(this,n,d,cg);

}
// inheriting the super class
//i.e., dunder proto object points to superclass constructor instead of subclass consturctor
subclass.prototype=new superclass(); 
// addition of a method to the subclass
//this should be done after inheriting the two objects .if done before, it would be overwritten
subclass.prototype.completeProfile=function(){
    return this.profile()+ "CGPA: "+ this.getcgpa()+", "+this.univ;
}


var student=new subclass("dinesh", "EEE","SASTRA",7.6); // object creation using subclass constructor
console.log(student.name); //superclass property
console.log(student.dept);// superclass property
console.log(student.univ);// subclass property
console.log(student.profile()); //superclass method
console.log(student.completeProfile()); // subclass method
console.log(subclass.prototype);// subclass inherited superclass 
console.log(superclass.prototype); // superclass inherited superSuper

