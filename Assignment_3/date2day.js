//1.Write a program that takes a date and prints the day on which the date falls on.
var date1=new Date();
var date2= new Date(2018,9,18,22,00,00);
findDay(date1);
findDay(date2);
function findDay(d){
    switch(d.getDay()){
        case 0:
        console.log("Sunday");
        break;
        case 1:
        console.log("Monday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;

    }
}
