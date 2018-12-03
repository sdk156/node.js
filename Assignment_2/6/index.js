var service=require('./services')
var controller=require('./controller');

// parsing the command line arguments using a 
service.secondArgument();

//printing the second argument using an inbulit module
console.log(controller.arg[1]);