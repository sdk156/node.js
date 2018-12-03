var minimist=require('minimist')(process.argv.slice(2));// module for parsing the command line arguments

module.exports={
secondArgument:function(){
    console.log(minimist['_'][1]);
}

};