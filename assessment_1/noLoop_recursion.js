//1.Print number 1 to 100 without using any loop. 

//this program uses only recursion to print from 1 to 100
function noLoopUsingRecursion(num,limit){

	if(num<=limit){
		console.log(num);
	noLoopUsingRecursion(num+1,limit);//recursive call
	}
}
noLoopUsingRecursion(1,100);// call
