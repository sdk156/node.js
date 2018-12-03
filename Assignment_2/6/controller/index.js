// argv is the inbuilt variable which returns an array of all command line arguments
var args=process.argv;
var remArguments=args.slice(2);
module.exports={
    arg:remArguments
} 