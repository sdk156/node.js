function occurence(string,callback){
    let obj=new Object(),length=string.length;
    let array=string.split("");// this function separates the string into array of characters
    // every letter is counted once and once counted replaced with a '?'
    for( let i=0;i<length;i++){
        let count=1;
        if(array[i]!='?'){
            obj[array[i]]=1;
        }
        for(let j=i+1;j<length;j++){
            if(array[i]==array[j] && array[i]!='?'){
                count++;
                array[j]='?';
                obj[array[i]]=count;
            }
            
        }
        
    }
    callback(obj);
}
//exporting the function
module.exports={
    occurence:occurence
};