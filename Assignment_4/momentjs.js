//2. Demonstrate the use of Moment. Your system should accept a date as input 
// and validate whether the date is between your system defined date range. 
// If it is present than return true otherwise false. Apart from this the
// system should tell the user, input date is near to which date of the 
// system defined range and the difference between those date(s) in ms.
// Example: Suppose your input is 2018/10/01 (YYYY/MM/DD) and system defined range is 2018/09/20 (start date range) and 2018/10/10 (end date range). Final response should be
// result = {
// inBetween: true,
// nearDate: 2018/10/10,
// difference: xxxxx(in ms)
// }


var moment= require('moment'); // importing moment module
const date1= moment("2018-09-01");// date 1 
const date2=moment("2018-10-01"); //date 2

//three moment objects are constructed and sent top the tester function to validate for the requirement
var testDate1= moment("2018-11-01"); // valid date but out of bounds
var testDate2= moment("2018-09-10"); // valid date and inside the bounds
var testDate3= moment("invalid date"); // an invalid date passed to moment constructor.hence prints all error mesages 
 //testing the moment objects
tester(testDate1.isValid(),testDate1,differenceFinder);
tester(testDate2.isValid(),testDate2,differenceFinder);
tester(testDate3.isValid(),testDate3,differenceFinder);

// this function tells whether the moment object is valid or not in terms of format (ISO 8601 strings,RFC 2822 date time format)
function tester(trueOrFalse,momentObj,callback){
    if(trueOrFalse){
        console.log(callback(momentObj));
    }
    else{
        console.log("invalid date time format");
    }

}
//this function returns the final result of a valid moment object as per system requirement
 function differenceFinder (momentObject){
     var diff1=date1.diff(momentObject);//console.log("diff1",diff1);
     var diff2=date2.diff(momentObject);//console.log("diff2",diff2);
     var dateFormat="YYYY/MM/DD";
         result={
        inBetween:diff1<0 &&diff2> 0?true:false,
        nearDate:Math.abs(diff1)>Math.abs(diff2)?date2.format(dateFormat):date1.format(dateFormat),
        difference:Math.abs(diff1)>Math.abs(diff2)?Math.abs(diff2):Math.abs(diff1)

     };
     return result;

 }
