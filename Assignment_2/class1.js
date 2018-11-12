//4.Demonstrate Class and its functionality.(super/constructor/get/set/static)

class details{ // parent class
    constructor(de, cg){
this.dept=de;
this.cgpa=cg;
    }

     cgpa(){
        return this.cgpa;
    }
    
    get department(){
        return this.dept;
    }
    
}
class student extends details{// child class
    constructor(name,d,cg){
        super(d,cg)// invokes parent calss constructor
        this.name=name;
    }
    get university(){ // used to return the university
        return this.univ;
    }
    set university(univ){ // used to set the university
        this.univ=univ;
    }
    get profile(){ // used to return the complete profile
        return this.name+", "+super.department+", CGPA: "+super.cgpa()+", "+this.university;

    }
    static allstudents(s){ // used to display all students
        for(let index in s){
            console.log(s[index].profile);
        }
    }

}
var sdk=new student("Shalini","Fashion Design",8.2);// student 1
sdk.university="Anna University";// student  1 details
var dk=new student("Dinesh", "EEE", 7.6);//student 2
dk.university="SASTRA University"; // student 2 details
var students=[sdk,dk]; // array of students
student.allstudents(students); // accessing all student details using static method
