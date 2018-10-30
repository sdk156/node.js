var string1="hi Hi how are you hi who are you hi Hi hello hi Hi";
console.log("initial string");
console.log(string1);
console.log("after replacemnt");
var newString=string1.replace(/hi/g,"who");// case sensitive repacement
console.log(newString);
string1="hi Hi how are you hi who are you hi hi hello hi hi";
var newString=string1.replace(/hi/gi,"");// case insensitive repacement
console.log(newString);